import axios from "axios"

export const tokenAuthChecker = async () => {
  //ここにログイン認証のロジックを書く
    try {
      await axios.get(`${process.env.API_URL}/api/auth/validate_token`, {
        headers: {
          'access-token': localStorage.getItem('access-token'),
          'client': localStorage.getItem('client'),
          'uid': localStorage.getItem('uid'),
        }
      }
    )
        .then((res) => {
          console.log(res);
          if (res.status === 401) {
            // API認証エラーしたときに遷移する
            localStorage.removeItem('access-token')
            localStorage.removeItem('uid')
            localStorage.removeItem('client')
            console.log("トークンの有効期限切れにより、ログインページに遷移します。")
            location.href = `${process.env.NEXT_PUBLIC_API_URL}`
            return;
          } else if (res.status === 200) {
            // APIから受け取った値でトークンを書き換える
            console.log(res.headers);
            localStorage.setItem('access-token', res.headers['access-token'])
            localStorage.setItem('uid', res.headers['uid'])
            localStorage.setItem('client', res.headers['client'])
            console.log("トークンを更新しました。")
            return;
          }
        })
    } catch (err) {
      alert(err);
      console.log(err.status)
      location.href = `${process.env.NEXT_PUBLIC_FRONT_URL}`
    }
}