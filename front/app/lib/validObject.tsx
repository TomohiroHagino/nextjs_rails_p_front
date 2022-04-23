import { fetchHeaders } from "../services/utils/fetchHeaders";
import { CRED_HEAD } from "../src/features/types";

// バリデーション処理
export const validObject = async ({title, body}): Promise<any> => {
  const headers: CRED_HEAD = fetchHeaders()
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "access-token": headers.accessToken,
      "client": headers.client,
      "uid": headers.uid 
    },
    body: JSON.stringify({title : title, body : body})
  }
  const res = await fetch(`${process.env.API_URL}/api/validates/obj`, requestOptions)
                .then(response => {
                  if (!response.ok) {
                    console.error('response.ok:', response.ok);
                    console.error('response.status:', response.status);
                    throw new Error(response.statusText);
                  }
                  return response.json()
                })
                .catch(error => {
                  console.error('通信に失敗しました', error);
                });
  console.log(res)
  return res
}