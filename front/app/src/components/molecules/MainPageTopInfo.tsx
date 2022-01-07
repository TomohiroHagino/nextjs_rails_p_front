// import { putSkillObj } from "../../../lib/application"
import { HTMLComponent } from "../../../services/utils/HtmlComponent"
import { MainPageTopInfoEditButton } from "../atoms/button/MainPageTopInfoEditButton"
import { MainPageTopInfoDeleteButton } from "../atoms/button/MainPageTopInfoDeleteButton"

export const MainPageTopInfo = (props) => {
  const {
    id,
    model,
    objIntroduce,
    content,
    content1,
    content2,
    content3,
    content4,
    showModal,
    setShowModalFunction, 
    showEditModalFunction,
    changeInputBody,
    changeInputContent1,
    changeInputContent2,
    changeInputContent3,
    changeInputContent4,
    skillId,
    putSkillObj,
    deleteSkillObj
  } = props
  return (
    <div className="
      relative
      text-white
      text-sm
      md:text-lg
      mt-4
    ">
      <HTMLComponent>{objIntroduce ? objIntroduce : "ページ遷移するまでは、編集モーダルで更新すると元に戻せます。"}</HTMLComponent>
      {/* 動的な部分をpropsとして、コンポーネントをそのまま渡してあげればよい。 */}
      <MainPageTopInfoEditButton
        id={id}
        model={model}
        // モーダルフラグ
        showModal={showModal}
        setShowModalFunction={setShowModalFunction}
        showEditModalFunction={showEditModalFunction}
        // モーダルの内容
        content={content}
        content1={content1}
        content2={content2}
        content3={content3}
        content4={content4}
        // フィールド変更時の処理
        changeInputBody={changeInputBody}
        changeInputContent1={changeInputContent1}
        changeInputContent2={changeInputContent2}
        changeInputContent3={changeInputContent3}
        changeInputContent4={changeInputContent4}
        // 更新管理
        skillId={skillId}
        // 更新処理
        requestFunction={putSkillObj}
        // スタイル
        bgColorNum={"bg-red-500"}
        hoverBgColorNum={"hover:bg-red-900"}
        topPosi={"-top-16"}
        rightPosi={"right-16"}
      >
        edit
      </MainPageTopInfoEditButton>
      <MainPageTopInfoDeleteButton
        id={id}
        model={model}
        // 削除管理
        skillId={skillId}
        // 削除処理
        requestFunction={deleteSkillObj}
        // スタイル
        bgColorNum={"bg-yellow-500"}
        hoverBgColorNum={"hover:bg-yellow-900"}
        topPosi={"-top-16"}
        rightPosi={"right-0"}
      >
        del
      </MainPageTopInfoDeleteButton>
    </div>
  )
}