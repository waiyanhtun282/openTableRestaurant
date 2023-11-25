import React from 'react'

export default function Header({name}:{name:string}) {
  const renderTitle = () =>{
      const newArray = name.split("-");
       newArray[newArray.length-1] =`(${newArray[newArray.length - 1 ]})`;
       return newArray.join(" ")
  }
  return (
    <div className="h-96 overflow-hidden">
    <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
      <h1 className="text-7xl text-white captitalize text-shadow text-center">
        {renderTitle()}
      </h1>
    </div>
  </div>
  )
}
