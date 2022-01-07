import { HTMLComponent } from "../../../services/utils/HtmlComponent"

export const MainPageBottomInfo = ({ objContent1, objContent2, objContent3, objContent4 }) => {

  return (
    <div
      className="
      relative
      text-white
      text-sm
      md:text-lg
      mt-4
    ">
      <br />
      <HTMLComponent>{objContent1}</HTMLComponent>
      <HTMLComponent>{objContent2}</HTMLComponent>
      <HTMLComponent>{objContent3}</HTMLComponent>
      <HTMLComponent>{objContent4}</HTMLComponent>
    </div>
  )
}