import { SkillCard } from "./SkillCard"

export const SkillCards = ({ objs, model, showModal, setShowModalFunction, showEditModalFunction, createTitle, setCreateTitle, createBody, setCreateBody, changeInputTitle, changeInputBody, skillId, setSkillId, putSkillObj, deleteSkillObj }) => {

  return (
    <ul className="
    h-75vh
    overflow-y-scroll
    ">
      {objs.map((obj) =>
        <SkillCard
          key={obj.id}
          id={obj.id}
          title={obj.title}
          body={obj.body}
          model={model}
          // モーダルフラグ
          showModal={showModal}
          setShowModalFunction={setShowModalFunction}
          showEditModalFunction={showEditModalFunction}
          // モーダルの内容
          createTitle={createTitle}
          createBody={createBody}
          // フィールド変更時の処理
          changeInputTitle={changeInputTitle}
          changeInputBody={changeInputBody}
          //　更新管理
          skillId={skillId}
          setSkillId={setSkillId}
          // 更新処理
          putSkillObj={putSkillObj}
          // 削除処理
          deleteSkillObj={deleteSkillObj}
        />
      )
      }
    </ul>
  )
}