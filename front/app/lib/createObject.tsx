import { fetchHeaders } from "../services/utils/fetchHeaders";
import { CRED_HEAD, SKILL_OBJECT } from "../src/features/types";

// 作成処理
export const createObject = async ({model, me_id, title, body}): Promise<SKILL_OBJECT> => {
  const headers: CRED_HEAD = fetchHeaders()
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "access-token": headers.accessToken,
      "client": headers.client,
      "uid": headers.uid 
    },
    body: JSON.stringify({me_id : me_id, title : title, body : body})
  }
  const res = await fetch(`${process.env.API_URL}/api/create_${model}/`, requestOptions)
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
  return res
}