// import { useCallback, useEffect, useState } from "react";
// import { deleteObject } from "../lib/deleteObject";
// import { updateObject } from "../lib/updateObject";
// import { fetchHeaders } from "../services/utils/fetchHeaders";

// // 作成中
// export const useObect= (model: string): [Array<Object>,any]  => {
//   // オブジェクト
//   const [objs, setObjs] = useState([])
//   // 更新管理
//   const [updated, setUpdated] = useState(false)
//   // 削除管理
//   const [deleted, setDeleted] = useState(false)
//   // モーダルの表示
//   const [showModal, setShowModal] = useState(false);
//   // オブジェクトの内容
//   const [skillId, setSkillId] = useState<number | null>(null);
//   const [createTitle, setCreateTitle] = useState('');
//   const [createBody, setCreateBody] = useState('');
//   // トースト表示
//   const [showEditToast, setShowEditToast] = useState(false);
//   const [showDeleteToast, setShowDeleteToast] = useState(false);
//   const [updChecked, setUpdChecked] = useState(false)
//   const [delChecked, setDelChecked] = useState(false)
//   const handleUpdClick = () => setUpdChecked(!updChecked)
//   const handleDelClick = () => setDelChecked(!delChecked)

//   // 更新処理
//   const putSkillObj = async ({model, id, title, body}) => {
//     const headers = fetchHeaders()
//     const res = await updateObject({model, id, title, body, headers})
//     setUpdated(true)
//     setShowModal(false)
//     console.log(`showModal: false`)
//     setTimeout(()=>
//       setUpdChecked(true
//     ),2000)
//     setUpdChecked(false)
//     setShowEditToast(false)
//     setShowEditToast(true)
//     setUpdated(false)
//     return res
//   }

//   // 削除処理
//   const deleteSkillObj = async ({model, id}) => {
//     const headers = fetchHeaders()
//     const res = await deleteObject({model,id,headers})
//     setDeleted(true)
//     setShowModal(false)
//     console.log(`showModal: false`)
//     setTimeout(()=>
//       setDelChecked(true
//     ),2000)
//     setDelChecked(false)
//     setShowDeleteToast(false)
//     setShowDeleteToast(true)
//     setDeleted(false)
//     return res
//   }

//   // モーダル管理
//   const showEditModal = (boolean, id) => {
//     console.log(`showModal: ${boolean}`)
//     console.log(`skillNumber: ${id}`)
//     setShowModal(boolean)
//     const result = objs.find((s) => s.id === id);
//     if (result) {
//       setSkillId(result.id)
//       setCreateTitle(result.title)
//       setCreateBody(result.body)
//     }
//   }

//   // フィールド変更
//   const changeInputTitle = useCallback((isState) => {
//       setCreateTitle(isState)
//     }, [showModal])

//   // フィールド変更
//   const changeInputBody = useCallback((isState) => {
//     setCreateBody(isState)
//   }, [showModal])

//   const getSkillObjects = async (model) => {
//     const headers = fetchHeaders()
//     console.log(`modelName: ${model}`)
//     await fetch(`${process.env.API_URL}/api/list_${model}s`, {
//       headers: {
//         "access-token": headers.accessToken,
//         "client": headers.client,
//         "uid": headers.uid 
//       }
//     })
//     .then(response => {
//       if (!response.ok) {
//         console.error('サーバーエラー');
//         alert(response.statusText)
//         location.href = `${process.env.NEXT_PUBLIC_FRONT_URL}`
//       }
//       return response.json()
//     })
//     .then(data => {
//       console.log('データ取得')
//       setObjs(data)
//       console.log(data)
//       return data
//       }
//     )}

//     const getShowSkillObject = async (path) => {
//       const headers = fetchHeaders()
//       console.log(`modelName: ${model}`)
//       await fetch(`${process.env.API_URL}/api/${path}`, {
//         headers: {
//           "access-token": headers.accessToken,
//           "client": headers.client,
//           "uid": headers.uid 
//         }
//       })
//       .then(response => {
//         if (!response.ok) {
//           console.error('サーバーエラー');
//           alert(response.statusText)
//           location.href = `${process.env.NEXT_PUBLIC_FRONT_URL}`
//         }
//         return response.json()
//       })
//       .then(data => {
//         console.log('データ取得')
//         setObjs(data)
//         console.log(data)
//         return data
//         }
//       )
//     }

//   return [objs,{
//     setObjs,
//     getSkillObjects,
//     putSkillObj,
//     deleteSkillObj,
//     showEditModal,
//     updated,
//     setUpdated,
//     deleted,
//     setDeleted,
//     skillId,
//     setSkillId,
//     createTitle,
//     setCreateTitle,
//     createBody,
//     setCreateBody,
//     updChecked,
//     delChecked,
//     showModal,
//     setShowModal,
//     showEditToast,
//     setShowEditToast,
//     showDeleteToast,
//     setShowDeleteToast,
//     handleUpdClick,
//     handleDelClick,
//     changeInputTitle,
//     changeInputBody,
//   }];
// }