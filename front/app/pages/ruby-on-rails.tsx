import { OnHeaderLayout } from '../src/components/templates/OnHeaderLayout'
import { GotoMainPageButton } from '../src/components/atoms/button/GoToMainPageButton'
import { CreateNewModalButton } from '../src/components/atoms/button/CreateNewModalButton'
import { SkillCards } from '../src/components/organisms/skills/SkillCards'
import { MainLayout } from '../src/components/templates/MainLayout'
import { useEffect } from 'react'
import { EditedToast } from '../src/components/atoms/toast/EditedToast'
import { DeletedToast } from '../src/components/atoms/toast/DeletedToast'
import { CreatedToast } from '../src/components/atoms/toast/CreateToast'
import { useObect } from '../hooks/useObject'
import { NextPage } from 'next'

const RubyOnRails: NextPage = () => {
  // オブジェクトの入れ物
  const modelName = 'rails_skill'
  const [objs,{
    setObjs,
    getSkillObjects,
    postSkillObj,
    putSkillObj,
    deleteSkillObj,
    validMessages,
    showEditModal,
    showCreateModal,
    createModal,
    updated,
    setUpdated,
    deleted,
    setDeleted,
    created,
    setCreated,
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
    showDeleteToast,
    showCreateToast,
    handleUpdClick,
    handleDelClick,
    handleCrtClick,
    changeInputTitle,
    changeInputBody,
  }] = useObect(modelName)

  // 初回にレンダリング
  useEffect(() => { setObjs(getSkillObjects(modelName))}, [])

  // 更新後、作成後、削除後にレンダリング
  useEffect(() => {
    if (updated || deleted || created) {
      console.log("更新もしくは作成もしくは削除が実行されました")
      setObjs(getSkillObjects(modelName))
      if(updated) { setTimeout(()=>{setUpdated(false)}, 3000) }
      if(deleted) { setTimeout(()=>{setDeleted(false)}, 3000) }
      if(created) { setTimeout(()=>{setCreated(false)}, 3000) }
    }
  }, [updated,deleted,created])

  return (
    <OnHeaderLayout title="Ruby on Rails page">
      <CreateNewModalButton
        model={modelName}
        // モーダルフラグ
        createModal={createModal}
        showCreateModalFunction={showCreateModal}
        // モーダルの内容
        createTitle={createTitle}
        createBody={createBody}
        // フィールド変更時の処理
        changeInputTitle={changeInputTitle}
        changeInputBody={changeInputBody}
        // 作成処理
        postSkillObj={postSkillObj}
        // バリデーションメッセージ
        validMessages={validMessages}
      />
      <MainLayout>
        {showEditToast && <EditedToast checked={ updChecked } handleClick={ handleUpdClick }></EditedToast>}
        {showDeleteToast && <DeletedToast checked={ delChecked } handleClick={ handleDelClick }></DeletedToast>}
        {showCreateToast && <CreatedToast checked={ crtChecked } handleClick={ handleCrtClick }></CreatedToast>}
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
          createBody={ createBody }
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
          // バリデーションメッセージ
          validMessages={ validMessages }
        />
      </MainLayout>
      <GotoMainPageButton />
    </OnHeaderLayout>
  )
}

export default RubyOnRails