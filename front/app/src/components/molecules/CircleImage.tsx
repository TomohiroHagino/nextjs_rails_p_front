import { ModalButton } from "../atoms/button/ModalButton"
export const CircleImage = ({}) => {
  return (
    <div className="
      relative
      mx-auto
      text-center
      text-white
      w-48
      h-48
      rounded-full
      mt-8
    ">
      <img className="rounded-full" src="https://user-images.githubusercontent.com/43706329/148500478-526c5fec-9ccd-4f01-8183-6498f698f1b7.png" />
      {/* <p className="pt-3">画像</p> */}
      {/* <ModalButton
        showModal={showModal}
        title="Meの画像"
        body="暫定"
      >edit</ModalButton> */}
    </div>
  )
}
