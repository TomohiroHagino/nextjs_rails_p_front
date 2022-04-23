import { Transition } from '@tailwindui/react'
// import { bindActionCreators } from "@reduxjs/toolkit";

export function ModalButton(props) {
  const { model, id, children, showModal, setShowModalFunction, showEditModalFunction, createTitle, createBody, changeInputTitle, changeInputBody, skillId, setSkillId, putSkillObj, validMessages } = props

  return (
    <>
      <div className="
        absolute
        right-16
        -top-0
        bg-opacity-50
        hover:bg-red-900
        hover:bg-opacity-50
        text-opacity-50
        text-center
        text-white
        bg-red-500
        w-12
        h-12
        rounded-full
        transition
        z-0
        "
        onClick={()=> showEditModalFunction(!showModal, id)}
      >
        <p className="pt-2">{children}</p>
      </div>
      <div className="absolute z-20">
      <Transition
        show={showModal}
      >
        <Transition.Child
          enter="transition-opacity ease-linear duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="justify-center text-black items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-20 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl z-200">
              <div className="bg-white border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none z-100">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    投稿の編集
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={setShowModalFunction}
                  >
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto z-90">
                  <p className="text-red-600">{ validMessages }</p>
                  <form>
                    <p>Title</p>
                    <input
                      type="text"
                      name="issue"
                      className="w-4/5"
                      placeholder="Enter text"
                      value={createTitle}
                      onChange={(e: any)=> changeInputTitle(e.target.value)}
                    />
                    <p className="mt-5">Body</p>
                    <textarea
                      name="issue"
                      placeholder="Enter text"
                      className="w-full"
                      rows={10}
                      cols={60}
                      value={createBody}
                      onChange={(e: any)=> changeInputBody(e.target.value)}
                    >
                    </textarea>
                    <br />
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={setShowModalFunction}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-400 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=> putSkillObj({model: model, id: skillId, title: createTitle, body: createBody})}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-90 bg-black"></div>
        </Transition.Child>

      </Transition>
      </div>
    </>
  );
}