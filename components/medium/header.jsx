import React, { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";

const Header = () => {
  const { user } = useUserContext()
  const [date, setDate] = useState(new Date())

  return (
    <>
      <div className="w-full py-4 px-8 bg-yellow-100 rounded-full flex flex-row justify-between mb-8">
        <p>{date.toLocaleString("id-ID", {dateStyle:"full"})}</p>
        <p className="text-right">Selamat Datang, <span className="font-semibold">{user.name}</span></p>
      </div>
    </>
  )
}

export default Header