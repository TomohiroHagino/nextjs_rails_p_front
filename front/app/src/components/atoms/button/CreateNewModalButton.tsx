import { Transition } from '@tailwindui/react'

export const CreateNewModalButton = (props) => {
  const { model, id, children, createModal, setShowModalFunction, showCreateModalFunction, createTitle, createBody, changeInputTitle, changeInputBody, postSkillObj, validMessages } = props

  return (
    <>
      <div className="
        absolute
        right-4
        md:right-8
        bg-yellow-700
        rounded-full
        hover:bg-opacity-80
        transition
        w-20
        h-20
        z-10
      "
        onClick={showCreateModalFunction}
      >
        <svg
          className="mx-auto mt-4 coursor-pointer h-6 w-6 text-white"
          fill="none" stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
        <div className="text-white">
          <p className="text-center text-lg font-bold">New</p>
        </div>
      </div>
      <div className="absolute z-50">
        <Transition
          show={createModal}
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
              className="justify-center text-black items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl z-200">
                <div className="bg-white border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none z-100">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      投稿の編集
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={showCreateModalFunction}
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
                      onClick={showCreateModalFunction}
                    >
                      Close
                    </button>
                    <button
                      className="bg-green-400 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={()=> postSkillObj({model: model, me_id: "1", title: createTitle, body: createBody})}
                    >
                      Save
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
  )
}