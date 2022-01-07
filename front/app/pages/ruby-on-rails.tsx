import { OnHeaderLayout } from '../src/components/templates/OnHeaderLayout'
import { GotoMainPageButton } from '../src/components/atoms/button/GoToMainPageButton'
import { SkillCards } from '../src/components/organisms/skills/SkillCards'
import { MainLayout } from '../src/components/templates/MainLayout'
import { useEffect } from 'react'
import { EditedToast } from '../src/components/atoms/toast/EditedToast'
import { DeletedToast } from '../src/components/atoms/toast/DeletedToast'
import { useObect } from '../hooks/useObject'
import { NextPage } from 'next'

const RubyOnRails: NextPage = () => {
  // オブジェクトの入れ物
  const modelName = 'rails_skill'
  const [objs,{
    setObjs,
    getSkillObjects,
    putSkillObj,
    deleteSkillObj,
    showEditModal,
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
    showModal,
    setShowModal,
    showEditToast,
    setShowEditToast,
    showDeleteToast,
    setShowDeleteToast,
    handleUpdClick,
    handleDelClick,
    changeInputTitle,
    changeInputBody,
  }] = useObect(modelName)

  // 初回にレンダリング
  useEffect(() => { setObjs(getSkillObjects(modelName))}, [])

  // 更新後、削除後にレンダリング
  useEffect(() => {
    if (updated || deleted) {
      console.log("更新が実行されました")
      if (updated) { setShowEditToast(true) }
      if (deleted) { setShowDeleteToast(true) }
      setObjs(getSkillObjects(modelName))
      if(updated) { setTimeout(()=>{setUpdated(false)}, 3000) }
      if(deleted) { setTimeout(()=>{setDeleted(false)}, 3000) }
    }
  }, [updated,deleted])

  return (
    <OnHeaderLayout title="Ruby on Rails page">
      <MainLayout>
        {showEditToast && <EditedToast checked={ updChecked } handleClick={ handleUpdClick }></EditedToast>}
        {showDeleteToast && <DeletedToast checked={ delChecked } handleClick={ handleDelClick }></DeletedToast>}
        <div>CSRレンダリング: ReactのuseEffect</div>
        <SkillCards
          objs={ objs.length > 0 ? objs : [] }
          model={modelName}
          // モーダルのアクション
          showModal={ showModal }
          setShowModalFunction={()=> setShowModal(!showModal)}
          showEditModalFunction={(boolean, id)=>showEditModal(boolean, id)}
          // モーダルの内容
          createTitle={ createTitle }
          setCreateTitle={() => setCreateTitle(createTitle) }
          createBody={ createBody }
          setCreateBody={() => setCreateBody(createBody) }
          // フィールド変更時の処理
          changeInputTitle={(isState) => changeInputTitle(isState)}
          changeInputBody={(isState) => changeInputBody(isState)}
          // 更新ステート管理
          skillId={ skillId }
          setSkillId={(isState)=>setSkillId(isState)}
          // 更新処理
          putSkillObj={(isState) => putSkillObj({ model: modelName, id: isState.id, title: isState.title, body: isState.body })}
          // 削除処理
          deleteSkillObj={(isState) => deleteSkillObj({ model: modelName, id: isState.id })}
        />
      </MainLayout>
      <GotoMainPageButton />
    </OnHeaderLayout>
  )
}

export default RubyOnRails