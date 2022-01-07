import { createSlice, PayloadAction, createAsyncThunk, isRejected } from "@reduxjs/toolkit";
import axios from "axios";
import router from "next/router";
import { fetchHeaders } from "../../../services/utils/fetchHeaders";
import { AUTH_STATE, CRED, CRED_HEAD } from "../../features/types";

const initialState: AUTH_STATE = {
  isLoginView: true,
  loginUser: {
    id: 0,
    email: "",
  }
}

// ログインする非同期関数（Sliseの外でフェッチする関数）
export const fetchAsyncLogin = createAsyncThunk(
  "auth/login",
  async (auth: CRED, thunkAPI) => {
    try {
      console.log(`認証`)
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/sign_in`,
        { email: auth.email, password: auth.password }
      )
      if (res.status === 401) {
        throw "authentication failed";
      } else if (res.status === 200) {
        localStorage.setItem('access-token', res.headers['access-token'])
        localStorage.setItem('uid', res.headers['uid'])
        localStorage.setItem('client', res.headers['client'])
        return res.data;
      }
    } catch (err) {
      alert(err);
      return thunkAPI.rejectWithValue({ errorMessage: err.message });
    }
  }
)

// TODO: 現在未使用。
// ログアウトする非同期関数（Sliseの外でフェッチする関数）
export const fetchAsyncLogout = createAsyncThunk(
  "auth/logout",
  async (cred_head: CRED_HEAD, thunkAPI) => {
    try {
      const res = await axios.delete(
        `${process.env.API_URL}/api/auth/sign_out`,
        {
          data:
          {
            "uid": cred_head.uid,
            "access-token": cred_head.accessToken,
            "client": cred_head.client,
          }
        }
      )
      if (res.status === 401) {
        throw "authentication failed";
      } else if (res.status === 200) {
        localStorage.removeItem('access-token')
        localStorage.removeItem('uid')
        localStorage.removeItem('client')
        console.log("ローカルストレージ削除")
        return res.data;
      }
    } catch (err) {
      alert(err);
      return thunkAPI.rejectWithValue({ errorMessage: err.message });
    }
  }
)


// createAsyncThunk を使うと、thunk を書くときにありがちな冗長なコードを簡略化できる。
// action type (第一引数の文字列)、Promise を返す関数（第二引数）を元に、thunk を生成する
// thunk は Promise の結果によりpending/fulfilled/rejectedのいずれかの action type を送出する
// 生成された thunk はthunk.fulfilled等の形式で action type として利用できる

// ユーザーを新規作成 && ログインする非同期関数（Sliseの外でフェッチする関数）
export const fetchAsyncRegister = createAsyncThunk(
  "auth/register",
  async (auth: CRED) => {
    try {
      await axios.post<any>(
        `${process.env.API_URL}/api/auth`,
        { email: auth.email, password: auth.password }
      )
        .then((res) => {
          console.log(res.data);
          if (res.status === 401) {
            throw "authentication failed";
          } else if (res.status === 200) {
            console.log(res.headers);
            router.push('/main-page');
            return res.data;
          }
        })
    } catch (err) {
      alert(err);
    }
  }
)

// ユーザーの情報を取得する非同期関数（Sliceの外でフェッチする）
export const fetchAsyncCurrentUser = createAsyncThunk(
  "auth/loginuser",
  async () => {
    const header = fetchHeaders();
    // TODO:戻り値がわかり次第、型を指定する
    const res = await axios.get<any>(
      `${process.env.API_URL}/api/auth/current`,
      { headers: header }
    )
    if (res.data) {
      return res;
    } else {
      null;
    }

  }
)

// slice本体
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleMode(state) {
      state.isLoginView = !state.isLoginView;
    },
  },
  // action creator を自動的に作成したくない場合にはこちらを使用する
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncLogin.fulfilled,
      (state, action: PayloadAction<any>) => {
        console.log("ログインに成功しました！");
        console.log(action.payload.data);
        router.push('/main-page');;
      }
    );

    builder.addCase(fetchAsyncLogin.rejected,
      (state, action: PayloadAction<any>) => {
        console.log("ログインに失敗しました！");
        console.log(action.payload.data);
        router.push('/');;
      }
    );

    builder.addCase(fetchAsyncLogout.fulfilled,
      (state, action: PayloadAction<any>) => {
        console.log("ログアウトに成功しました！");
        console.log(action.payload.data);
        window.location.href = '/';
      }
    );

    builder.addCase(
      fetchAsyncCurrentUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        console.log("ログインユーザーを取得しました！");
        console.log(action.payload.data);
      }
    );
  },
  // 他のアクションも必要になり次第ここに足していく
})

export const { toggleMode } = authSlice.actions;

// ログインモードを管理する関数
export const selectIsLoginView = (state) => state.authState.isLoginView;

export default authSlice.reducer;