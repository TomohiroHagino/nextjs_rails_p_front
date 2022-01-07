import { fetchHeaders } from "../services/utils/fetchHeaders";
import { CRED_HEAD, SKILL_OBJECT } from "../src/features/types";

// 論理削除処理
export const deleteObject = async ({model, id}): Promise<SKILL_OBJECT> => {
  const headers: CRED_HEAD = fetchHeaders()
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "access-token": headers.accessToken,
      "client": headers.client,
      "uid": headers.uid 
    },
    body: JSON.stringify({id : id})
  }
  const res = await fetch(`${process.env.API_URL}/api/delete_${model}/`, requestOptions)
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