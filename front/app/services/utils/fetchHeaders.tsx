// ヘッダーに付与する情報の取得
export const fetchHeaders = () => {
  const uid = localStorage.getItem('uid')
  const accessToken = localStorage.getItem('access-token')
  const client = localStorage.getItem('client')

  const headers = {
    contentType: "aplication/json",
    accessToken: accessToken,
    client: client,
    uid: uid
  }
  return headers
}