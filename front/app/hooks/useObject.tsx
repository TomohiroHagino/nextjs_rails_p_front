import { useCallback, useState } from "react";
import { createObject } from "../lib/createObject";
import { deleteObject } from "../lib/deleteObject";
import { updateObject } from "../lib/updateObject";
import { validObject } from "../lib/validObject";
import { fetchHeaders } from "../services/utils/fetchHeaders";
import { SKILL_OBJECT } from "../src/features/types";

export const useObect = (model: string): [Array<Object>,any]  => {
  // オブジェクト
  const [objs, setObjs] = useState<Array<SKILL_OBJECT>>([])
  // 作成管理
  const [created, setCreated] = useState<boolean>(false)
  // 更新管理
  const [updated, setUpdated] = useState<boolean>(false)
  // 削除管理
  const [deleted, setDeleted] = useState<boolean>(false)
  // モーダルの表示
  const [showModal, setShowModal] = useState<boolean>(false);
  const [createModal, setCreateModal] = useState<boolean>(false);
  // オブジェクトの内容
  const [skillId, setSkillId] = useState<number|null>(null);
  const [createTitle, setCreateTitle] = useState<string>('');
  const [createBody, setCreateBody] = useState<string>('');
  // トースト表示
  const [showCreateToast, setShowCreateToast] = useState<boolean>(false);
  const [showEditToast, setShowEditToast] = useState<boolean>(false);
  const [showDeleteToast, setShowDeleteToast] = useState<boolean>(false);
  const [crtChecked, setCrtChecked] = useState<boolean>(false)
  const [updChecked, setUpdChecked] = useState<boolean>(false)
  const [delChecked, setDelChecked] = useState<boolean>(false)
  const handleUpdClick: Function = () => setUpdChecked(!updChecked)
  const handleDelClick: Function = () => setDelChecked(!delChecked)
  const handleCrtClick: Function = () => setCrtChecked(!crtChecked)
  // バリデーションメッセージ表示
  const [validMessages, setValidMessages] = useState<string>("")

  // バリデーション
  const validateSkillObj: Function = async ({title, body}: SKILL_OBJECT): Promise<SKILL_OBJECT> => {
    const res = await validObject({title, body})
    return res
  }

  // 作成処理
  const postSkillObj: Function = async ({model, me_id, title, body}: SKILL_OBJECT): Promise<SKILL_OBJECT> => {
    const valid_res = await validObject({title, body})

    if (valid_res.result.status == "ok") {
      const res = await createObject({model, me_id, title, body})
      setCreated(true)
      setCreateModal(false)
      console.log(`createModal: ${createModal}`)
      setTimeout(()=>
        setCrtChecked(true
      ),2000)
      setCrtChecked(false)
      setShowCreateToast(false)
      setShowCreateToast(true)
      setCreated(false)
      return res
    }
    
    setValidMessages(valid_res.result.messages)
    return valid_res
  }

  // 更新処理
  const putSkillObj: Function = async ({model, id, title, body}: SKILL_OBJECT): Promise<SKILL_OBJECT> => {
    const valid_res = await validObject({title, body})

    if (valid_res.result.status == "ok") {
      const res = await updateObject({model, id, title, body})
      setUpdated(true)
      setShowModal(false)
      console.log(`showModal:  ${showModal}`)
      setTimeout(()=>
        setUpdChecked(true
      ),2000)
      setUpdChecked(false)
      setShowEditToast(false)
      setShowEditToast(true)
      setUpdated(false)
      return res
    }
    
    setValidMessages(valid_res.result.messages)
    return valid_res
  }

  // 削除処理
  const deleteSkillObj: Function  = async ({model, id}: SKILL_OBJECT): Promise<SKILL_OBJECT> => {
    const res = await deleteObject({model,id})
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
  const showEditModal: Function = (boolean, id): void => {
    console.log(`showModal: ${boolean}`)
    console.log(`skillNumber: ${id}`)
    setValidMessages("")
    setShowModal(boolean)
    if (objs != []) {
      const result = objs.find((s) => s.id === id);
      if (result) {
        setSkillId(result.id)
        setCreateTitle(result.title)
        setCreateBody(result.body)
      }
    }
  }

  const showCreateModal: Function = (): void => {
    console.log(`createModal: ${!createModal}`)
    console.log(`skillNumber: new`)
    setValidMessages("")
    setCreateTitle("")
    setCreateBody("")
    setCreateModal(!createModal)
  }

  // フィールド変更(showModalフラグが切り替わるタイミングのみ再レンダリングされる)
  const changeInputTitle = useCallback((isState): void => {
      setCreateTitle(isState)
    }, [showModal])

  // フィールド変更(showModalフラグが切り替わるタイミングのみ再レンダリングされる)
  const changeInputBody = useCallback((isState): void => {
    setCreateBody(isState)
  }, [showModal])

  const getSkillObjects: Function = async (model): Promise<void> => {
    const headers = fetchHeaders()
    console.log(`modelName: ${model}`)
    await fetch(`${process.env.API_URL}/api/list_${model}s`, {
      headers: {
        "access-token": headers.accessToken,
        "client": headers.client,
        "uid": headers.uid 
      }
    })
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
      setObjs(data)
      console.log(data)
      return data
      }
    )}

    const getShowSkillObject: Function = async (path): Promise<void> => {
      const headers = fetchHeaders()
      console.log(`modelName: ${model}`)
      await fetch(`${process.env.API_URL}/api/${path}`, {
        headers: {
          "access-token": headers.accessToken,
          "client": headers.client,
          "uid": headers.uid 
        }
      })
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
        setObjs(data)
        console.log(data)
        return data
        }
      )
    }

  return [objs,{
    setObjs,
    getSkillObjects,
    postSkillObj,
    putSkillObj,
    deleteSkillObj,
    validMessages,
    showEditModal,
    showCreateModal,
    createModal,
    setCreateModal,
    created,
    setCreated,
    updated,
    setUpdated,
    deleted,
    setDeleted,
    skillId,
    setSkillId,
    createTitle,
    setCreateTitle,
    createBody,
    setCreateBody,
    updChecked,
    delChecked,
    crtChecked,
    showModal,
    setShowModal,
    showEditToast,
    setShowEditToast,
    showDeleteToast,
    setShowDeleteToast,
    showCreateToast,
    handleUpdClick,
    handleDelClick,
    handleCrtClick,
    changeInputTitle,
    changeInputBody,
  }];
}