import React from "react";
import Nav from "../components/medium/nav";

const MainLayout = ({children}) => {
  return (
    <>
      <Nav/>
      {children}
    </>
  )
}
export default MainLayout