import { useState, useEffect } from "react";
import { Transition } from '@tailwindui/react'
// import { bindActionCreators } from "@reduxjs/toolkit";

export function MainPageTopInfoEditButton(props) {
  const { 
    model,
    id,
    children,
    showModal,
    setShowModalFunction,
    showEditModalFunction,
    content,
    content1,
    content2,
    content3,
    content4,
    changeInputBody,
    changeInputContent1,
    changeInputContent2,
    changeInputContent3,
    changeInputContent4,
    skillId,
    requestFunction,
    bgColorNum,
    hoverBgColorNum,
    topPosi,
    rightPosi
  } = props

  return (
    <>
      <div className={`
        absolute
        ${rightPosi}
        ${topPosi}
        bg-opacity-50
        ${hoverBgColorNum}
        hover:bg-opacity-50
        text-opacity-50
        text-center
        text-white
        ${bgColorNum}
        w-12
        h-12
        rounded-full
        transition
        z-0
        `}
        onClick={()=> showEditModalFunction(!showModal, id)}
      >
        <p className="pt-2.5">{children}</p>
      </div>
      <div className="absolute z-50">
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
            {/*使用する場所によって中身を切り替えられるようにしたい*/}
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
                      onClick={setShowModalFunction}
                    >
                      <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto z-90">
                    <form>

                      <p className="mt-5">Body</p>
                      <textarea
                        name="issue"
                        placeholder="Enter text"
                        className="w-full"
                        rows={5}
                        cols={60}
                        value={content}
                        onChange={(e: any)=> changeInputBody(e.target.value)}
                      >
                      </textarea>
                      <p>フロントエンド</p>
                      <input
                        type="text"
                        name="issue"
                        className="w-full"
                        placeholder="Enter text"
                        value={content1}
                        onChange={(e: any)=> changeInputContent1(e.target.value)}
                      />
                      <br />
                      <p>バックエンド</p>
                      <input
                        type="text"
                        name="issue"
                        className="w-full"
                        placeholder="Enter text"
                        value={content2}
                        onChange={(e: any)=> changeInputContent2(e.target.value)}
                      />
                      <br />
                      <p>インフラ</p>
                      <input
                        type="text"
                        name="issue"
                        className="w-full"
                        placeholder="Enter text"
                        value={content3}
                        onChange={(e: any)=> changeInputContent3(e.target.value)}
                      />
                      <br />
                      <p>その他</p>
                      <input
                        type="text"
                        name="issue"
                        className="w-full"
                        placeholder="Enter text"
                        value={content4}
                        onChange={(e: any)=> changeInputContent4(e.target.value)}
                      />
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
                      onClick={()=> requestFunction({model: model, id: skillId, introduce: content, frontend: content1, backend: content2, infra: content3, other: content4 })}
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