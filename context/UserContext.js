import { createContext, useContext, useEffect, useState } from 'react';
import Router from 'next/router'
import useApi from '../hooks/API';

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
    }
  }
  const GetUser = async (token) => {
    const {data, status} = await useApi({
      path: 'profile',
      method: 'GET',
      token
    })
    if(status === 200)
    {
      setLoginByCache({tokenData: token, userData: data.data})
    } else {
      setLogout()
    }
  }

  const checkUser = () => {
    if (typeof window !== undefined)
    {
      const tokenLs = window.localStorage.getItem('token')
      if(tokenLs)
      {
        GetUser(tokenLs)
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