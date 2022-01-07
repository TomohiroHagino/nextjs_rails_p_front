import { VFC } from "react";
import { CARD } from "../../../features/types";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import CodeBlock from "../../CodeBlock";


const Card: VFC<CARD> = (props) => {
  const { body, imgUrl } = props

  return (
    <>
      <div>
        <div className="
          markdown-preview
          bg-white
          text-black
          rounded-2xl
          mb-10
          p-8
        ">
          <ReactMarkdown
            children={body}
            plugins={[gfm]}
            components={{
              code: CodeBlock,
            }}
          />
          {imgUrl ? imgUrl : null}
        </div>
      </div>
    </>
  )
}

export default Card

