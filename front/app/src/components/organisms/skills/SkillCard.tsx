import { useEffect, useState, VFC } from "react"
import { SKILL_PROPS } from "../../../features/types"
import Card from "../../atoms/card/Card"
import { ModalButton } from "../../atoms/button/ModalButton" 

export const SkillCard: VFC<SKILL_PROPS> = (props) => {
  const { id, title, body, model, showModal, setShowModalFunction, showEditModalFunction, createTitle, createBody, changeInputTitle, changeInputBody, skillId, putSkillObj, deleteSkillObj, validMessages } = props

  return (
    <div className="
    relative
    ">
      <ModalButton
        id={id}
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
        // 更新管理
        skillId={skillId}
        // 更新処理
        putSkillObj={putSkillObj}
        // バリデーションメッセージ
        validMessages={validMessages}
      >
        edit
      </ModalButton>
      <div className="
        absolute
        right-0
        -top-0
        bg-opacity-50
        hover:bg-yellow-900
        hover:bg-opacity-50
        text-opacity-50
        text-center
        text-white
        bg-yellow-500
        w-12
        h-12
        rounded-full
        transition
        z-0
        "
        onClick={()=> deleteSkillObj({model: model, id: id})}
      >
        <p className="pt-2">del</p>
      </div>
      <div className="flex">
        <div>{id}</div>
        {" : "}
        <div className="
        w-9/12
        cursor-pointer
        text-white
        border-b
        border-gray-500
        hover:bg-gray-500
        "
        >
          {title}
        </div>
      </div>
      <Card body={body} imgUrl="" />
    </div>
  )
}

