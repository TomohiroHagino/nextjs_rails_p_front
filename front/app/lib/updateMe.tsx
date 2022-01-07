import { fetchHeaders } from "../services/utils/fetchHeaders";
import { CRED_HEAD, ME_OBJECT } from "../src/features/types";

// 更新処理
export const updateMe = async ({model, id, introduce, frontend, backend, infra, other}): Promise<ME_OBJECT> => {
  const headers: CRED_HEAD = fetchHeaders()
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "access-token": headers.accessToken,
      "client": headers.client,
      "uid": headers.uid 
    },
    body: JSON.stringify({id : id, introduce : introduce, frontend : frontend, backend: backend, infra: infra, other: other})
  }
  const res: ME_OBJECT = await fetch(`${process.env.API_URL}/api/update_${model}/`, requestOptions)
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