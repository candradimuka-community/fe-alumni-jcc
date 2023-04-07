import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full py-4 px-8 bg-yellow-100 rounded-full flex flex-row justify-between">
        <p>{date.toLocaleString("id-ID", {dateStyle:"full", timeStyle:"long"})}</p>
        <p className="text-right">Selamat Datang, <span className="font-semibold">nama</span></p>
      </div>
    </>
  )
}

export default Header