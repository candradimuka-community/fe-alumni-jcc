import { createContext, useContext, useEffect, useState } from 'react';
import Router from 'next/router'

const UserContext = createContext();

export function UserWrapper({ children }) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [token, setToken] = useState(null)
  const [user, setUser] = useState({
    id:'',
    name:'',
    role:''
  })

  const setLoginByCache = ({tokenData, userData}) => {
    setToken(tokenData)
    setUser({...userData})
    setLoggedIn(true)
  }
  const setLogin = ({tokenData, userData}) => {
    setToken(tokenData)
    setUser({...userData})
    setLoggedIn(true)
    if(typeof window !== undefined)
    {
      window.localStorage.setItem('token', tokenData)
      window.localStorage.setItem('user', JSON.stringify(userData))
    }
    Router.push('/')
  }
  const setLogout = () => {
    setToken(null)
    setUser({
      id:'',
      name:'',
      role:''
    })
    setLoggedIn(false)
    if(typeof window !== undefined)
    {
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('user')
    }
  }

  const checkUser = () => {
    if (typeof window !== undefined)
    {
      const tokenLs = window.localStorage.getItem('token')
      const userLs = window.localStorage.getItem('user')
      if(tokenLs && userLs)
      {
        setLoginByCache({tokenData: tokenLs, userData: JSON.parse(userLs)})
      }
    }
  }
  useEffect(()=>{
    checkUser()
  },[])
  return (
    <UserContext.Provider value={{
      setLogin,
      setLogout,
      user,
      token,
      loggedIn
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}