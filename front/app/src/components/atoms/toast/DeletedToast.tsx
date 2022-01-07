import { useEffect, useState } from "react";

export const DeletedToast = ({checked,handleClick}) => {
  return (
    <div className="alert-toast fixed top-12 right-0 m-7 w-5/6 md:w-full max-w-sm">
      <input type="checkbox" className="hidden" id="footertoast" checked={ checked } onChange={()=>handleClick}/>
      <label className="close cursor-pointer flex items-start justify-between w-full p-4 bg-yellow-500 h-30 rounded shadow-lg text-white" title="close" htmlFor="footertoast">
        データを削除しました。
      </label>
    </div>
  )
}