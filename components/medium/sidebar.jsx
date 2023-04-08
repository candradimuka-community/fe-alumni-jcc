import React from "react";
import Image from "next/image";
import Button from "../small/button";
import { useUserContext } from "../../context/UserContext";
import { useRouter } from "next/router";

const dashRoute = [
  {
    display : "Dashboard",
    url : "",
    type : "navigation",
    admin : false
  },
  {
    display : "Members",
    url : "/members",
    type : "navigation",
    admin : true
  },
  {
    display : "Profile",
    url : "/profile",
    type : "navigation",
    admin : false
  },
]

const SideBar = () => {
  const {user, setLogout} = useUserContext()
  const route = useRouter()
  return (
    <>
      <div onClick={() =>route.push('/')} className="bg-slate-200 w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden mx-auto mb-8">
        <Image src={'https://s3-alpha-sig.figma.com/img/ef57/4b10/95152edb973c74e75ba9f47251c1e5a5?Expires=1661731200&Signature=KUvZbsbqYfG7RzIWPyPNsn3H-QC0wGn6nUyoxC044zOFcOi7A3gzQXxpuxcauIrLV7CvKfSf~7sKXe0MecHUHTO4lWmbK68H46YfNWlFEdWKhYZejUQrNjzKd4~IRCQKObKgqLabBvHOAIMXj1V3RW8hPMHVrYW0boeFwna4MGvmWFbA6yWUHfodpfp9yVtLQb5qJGaHRNyba-Q7eT-o1tzPPfF1IYNp5tPmtNwPHzHwU-b5BCxdSLv5Rk2yzoGO-4-AKOlEXs19BRnfHsUR2igOA4CFlaPzQ2cWQBwo874HnPkFXh5J1WhnfMt670msx6YrFFd92K4spT~Hh5eAIA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'} alt="alumni" width={100} height={100}  />
      </div>
      <div className="flex flex-col justify-between h-4/5">
        <div className="flex flex-col space-y-1">
          {dashRoute.map((route)=> {
            if(route.admin && user.role !== 'admin') return <></>
            return (
              <Button navigation={route.type === 'navigation'} href={`/dashboard${route.url}`} className="w-full block bg-yellow-200 hover:bg-yellow-300">{route.display}</Button>
              )
            })}
        </div>
        <Button onClick={setLogout} className="w-full block bg-red-400 hover:bg-red-500 text-white">Logout</Button>

      </div>
    </>
  )
}

export default SideBar