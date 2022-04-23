import { useEffect } from 'react'
import { OnHeaderLayout } from '../src/components/templates/OnHeaderLayout'
import { MainPageLayout } from '../src/components/templates/MainPageLayout'
import { MainPageTopInfo } from '../src/components/molecules/MainPageTopInfo'
import { MainPageBottomInfo } from '../src/components/molecules/MainPageBottomInfo'
import { CircleImage } from '../src/components/molecules/CircleImage'
import { EditedToast } from '../src/components/atoms/toast/EditedToast'
import { DeletedToast } from '../src/components/atoms/toast/DeletedToast'
import { NextPage } from 'next'
import { useMeObject } from '../hooks/useMeObject'

const MainPage: NextPage = () => {
  const pathName = 'show_me'
  const [ obj, {
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
    showDeleteToast,
    handleUpdClick,
    handleDelClick,
    changeInputBody,
    changeInputContent1,
    changeInputContent2,
    changeInputContent3,
    changeInputContent4,
  }] = useMeObject()

  // 初回にレンダリング
  useEffect(() => { setObj(getShowMe(pathName))}, [])

  // 更新後、削除後にレンダリング
  useEffect(() => {
    if (updated || deleted) {
      console.log("更新もしくは削除が実行されました")
      setObj(getShowMe(pathName))
      if(updated) { setTimeout(()=>{setUpdated(false)}, 3000) }
      if(deleted) { setTimeout(()=>{setDeleted(false)}, 3000) }
    }
  }, [updated,deleted])

  return (
    <>
      {/* Appコンポーネントから子であるModalコンポーネントにpropsを渡す */}
      <OnHeaderLayout title="Main page">
        <MainPageLayout>
          {showEditToast && <EditedToast checked={ updChecked } handleClick={ handleUpdClick }></EditedToast>}
          {showDeleteToast && <DeletedToast checked={ delChecked } handleClick={ handleDelClick }></DeletedToast>}
          <div style={{color: 'white'}}>CSRレンダリング: ReactのuseEffect</div>
          <MainPageTopInfo
            id={obj.id}
            model="me"
            // 事前レンダリングのフィールド内容
            objIntroduce={obj.introduce}
            // フィールドの内容
            content={introduce}
            content1={frontend}
            content2={backend}
            content3={infra}
            content4={other}
            // モーダル管理
            showModal={showModal}
            showEditModalFunction={(boolean, id)=>showEditModal(boolean, id)}
            setShowModalFunction={()=> setShowModal(!showModal)}
            // フィールド変更時の処理
            changeInputBody={changeInputBody}
            changeInputContent1={changeInputContent1}
            changeInputContent2={changeInputContent2}
            changeInputContent3={changeInputContent3}
            changeInputContent4={changeInputContent4}
            // 更新管理
            skillId={skillId}
            // 更新処理
            putSkillObj={(isState) => putMeObj({ model: 'me', id: isState.id, introduce: isState.introduce, frontend: isState.frontend, backend: isState.backend, infra: isState.infra, other: isState.other })}
            // 削除処理
            deleteSkillObj={(isState) => deleteMeObj({ model: 'me', id: isState.id })}
          />
          <MainPageBottomInfo
            objContent1 ={obj.frontend || 'なし'}
            objContent2 ={obj.backend || 'なし'}
            objContent3 ={obj.infra || 'なし'}
            objContent4 ={obj.other || 'なし'}
          />
          <br />
          <CircleImage />
        </MainPageLayout>
      </OnHeaderLayout>
    </>
  )
}

export default MainPage