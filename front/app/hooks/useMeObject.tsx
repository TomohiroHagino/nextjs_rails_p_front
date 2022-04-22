import { useCallback, useState } from "react";
import { CRED_HEAD, ME_OBJECT } from "../src/features/types";
import { deleteMe } from "../lib/deleteMe";
import { updateMe } from "../lib/updateMe";
import { fetchHeaders } from "../services/utils/fetchHeaders";

// // 作成中
export const useMeObject= (): [ME_OBJECT,any]  => {
  // オブジェクトの入れ物
  const [obj, setObj] = useState<ME_OBJECT>({
    id : 0,
    introduce : '',
    frontend : '',
    backend : '',
    infra : '',
    other : '',
    deleted : false,
    created_at : new Date("1900-01-01"),
    updated_at : new Date("1900-01-01"),
  })
  // 更新管理
  const [updated, setUpdated] = useState(false)
  // 削除管理
  const [deleted, setDeleted] = useState(false)
  // モーダルの表示
  const [showModal, setShowModal] = useState(false);
  // オブジェクトの内容
  const [skillId, setSkillId] = useState<number>(0);
  const [introduce, setIntroduce] = useState('');
  const [frontend, setFrontend] = useState('');
  const [backend, setBackend] = useState('');
  const [infra, setInfra] = useState('');
  const [other, setOther] = useState('');
  // トースト表示
  const [showEditToast, setShowEditToast] = useState(false);
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const [updChecked, setUpdChecked] = useState(false)
  const [delChecked, setDelChecked] = useState(false)
  const [crtChecked, setCrtChecked] = useState(false)
  const handleUpdClick: Function = () => setUpdChecked(!updChecked)
  const handleDelClick: Function = () => setDelChecked(!delChecked)
  const handleCrtClick: Function = () => setCrtChecked(!crtChecked)

  // 更新処理
  const putMeObj = async ({model,id,introduce,frontend,backend,infra,other}: ME_OBJECT): Promise<ME_OBJECT> => {
    const res = await updateMe({
      model,
      id,
      introduce,
      frontend,
      backend,
      infra,
      other,
    })
    setUpdated(true)
    setShowModal(false)
    console.log(`showModal: false`)
    setTimeout(()=>
      setUpdChecked(true
    ),2000)
    setUpdChecked(false)
    setShowEditToast(false)
    setShowEditToast(true)
    setUpdated(false)
    return res
  }

  // 削除処理
  const deleteMeObj: Function  = async ({model,id}: ME_OBJECT): Promise<ME_OBJECT>=> {
    const res = await deleteMe({model,id})
    setDeleted(true)
    setShowModal(false)
    console.log(`showModal: false`)
    setTimeout(()=>
      setDelChecked(true
    ),2000)
    setDelChecked(false)
    setShowDeleteToast(false)
    setShowDeleteToast(true)
    setDeleted(false)
    return res
  }

  // モーダル管理
  const showEditModal = (boolean, id) => {
    console.log(`showModal: ${boolean}`)
    console.log(`skillNumber: ${id}`)
    setShowModal(boolean)
    setSkillId(obj.id)
    setIntroduce(obj.introduce)
    setFrontend(obj.frontend)
    setBackend(obj.backend)
    setInfra(obj.infra)
    setOther(obj.other)
  }

const getShowMe: Function = async (path: string) => {
  const headers = fetchHeaders()

  const res: ME_OBJECT = await fetch(`${process.env.API_URL}/api/${path}`, {
    headers: {
      "access-token": headers.accessToken,
      "client": headers.client,
      "uid": headers.uid 
      }})
      .then(response => {
        if (!response.ok) {
          console.error('サーバーエラー');
          alert(response.statusText)
          location.href = `${process.env.NEXT_PUBLIC_FRONT_URL}`
        }
        return response.json()
      })
      .then(data => {
        console.log('データ取得')
        setObj(data)
        console.log(data)
        return data
        }
      )
    return res
  }

  const changeInputBody = useCallback((isState) => {
    setIntroduce(isState)
  }, [showModal])

  const changeInputContent1 = useCallback((isState) => {
    setFrontend(isState)
  }, [showModal])

  const changeInputContent2 = useCallback((isState) => {
    setBackend(isState)
  }, [showModal])

  const changeInputContent3 = useCallback((isState) => {
    setInfra(isState)
  }, [showModal])

  const changeInputContent4 = useCallback((isState) => {
    setOther(isState)
  }, [showModal])

  return [obj,{
    setObj,
    getShowMe,
    putMeObj,
    deleteMeObj,
    showEditModal,
    updated,
    setUpdated,
    deleted,
    setDeleted,
    skillId,
    introduce,
    frontend,
    backend,
    infra,
    other,
    updChecked,
    delChecked,
    showModal,
    setShowModal,
    showEditToast,
    setShowEditToast,
    showDeleteToast,
    setShowDeleteToast,
    handleUpdClick,
    handleDelClick,
    handleCrtClick,
    changeInputBody,
    changeInputContent1,
    changeInputContent2,
    changeInputContent3,
    changeInputContent4,
  }];
}