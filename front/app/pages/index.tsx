import Head from 'next/head'
import { LoginForm } from '../src/components/organisms/login/LoginForm'
import { FirstToast } from '../src/components/atoms/toast/FirstToast'
import { NoHeaderLayout } from '../src/components/templates/NoHeaderLayout'
import { useDispatch,useSelector } from 'react-redux'
import { selectIsLoginView } from '../src/slices/auth/authSlice';
import { AppDispatch } from '../src/store/store'
import { toggleMode,fetchAsyncLogin,fetchAsyncRegister } from "../src/slices/auth/authSlice"
import { useState } from 'react'

export default function Home() {

  // ログイン処理
  const dispatch: AppDispatch = useDispatch()
  // store
  const isLoginView = useSelector(selectIsLoginView)
  // state
  const [authRequest, setAuthRequest] = useState({ email: "", password: "" })
  // function
  const login = async (e) => {
    // onSubmitは通常だとブラウザがリロードしてしまうのでpreventDefault
    e.preventDefault()
    // ログインモードか新規作成モードのフラグで条件分岐
    if (isLoginView) {
      // dispatch ログイン処理
      await dispatch(fetchAsyncLogin(authRequest))
    } else {
      // dispatch サインイン処理
      const result = await dispatch(fetchAsyncRegister(authRequest))
      if (fetchAsyncRegister.fulfilled.match(result)) {
        // 新規作成後に、dispatch ログイン処理
        await dispatch(fetchAsyncLogin(authRequest))
      }
    }
  }
  // このように書くと、emailが渡ってきても、passwordが渡ってきても対応できる
  const handleInputChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setAuthRequest({ ...authRequest, [name]: value })
  };

  return (
    <>
      <Head><title>2022 Portforio</title></Head>
      <NoHeaderLayout title="login">
        <LoginForm
          action={login}
          modeFlag={isLoginView}
          handleInputChange={handleInputChange}
          authRequest={authRequest}
          toggleMode={toggleMode}
        />
        <FirstToast />
      </NoHeaderLayout>
    </>
  )
}
