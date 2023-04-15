import React from "react";
import SideBar from "../components/medium/sidebar";
import Header from "../components/medium/header";

const DashboardLayout = ({children}) => {

  return (
    <div className="w-full min-h-screen grid grid-cols-5">
      {/* sidebar */}
      <div className="col-span-1 h-full bg-yellow-100 py-5 px-8">
        <SideBar/>
      </div>
      {/* main */}
      <div className="col-span-4 h-full bg-yellow-50 p-8">
        <Header/>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout