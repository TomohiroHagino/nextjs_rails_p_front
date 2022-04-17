import { useState, useEffect } from "react";
import { Transition } from '@tailwindui/react'
// import { bindActionCreators } from "@reduxjs/toolkit";

export function MainPageTopInfoDeleteButton(props) {
  const { 
    model,
    id,
    children,
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
        onClick={()=> requestFunction({model: model, id: skillId })}
      >
        <p className="pt-2">{children}</p>
      </div>
    </>
  );
}