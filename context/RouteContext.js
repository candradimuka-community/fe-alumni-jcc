import { createContext, useContext, useEffect } from 'react';
import { useUserContext } from './UserContext';
import {useRouter} from 'next/router'
const RouteContext = createContext();

export function RouteWrapper({ children }) {
  const {loggedIn, user} = useUserContext()
  const guestRoute = [
    '/auth',
    '/auth/[token]'
  ]
  const authRoute = [
    '/dashboard',
    '/dashboard/profile',
    '/dashboard/member'
  ]
  const adminRoute = [
    '/dashboard/member'
  ]
  const router = useRouter()
  const {pathname} = router
  
  useEffect(()=> {
    if (guestRoute.includes(pathname) && loggedIn)
    {
      router.push('/')
    }
    if (authRoute.includes(pathname) && !loggedIn)
    {
      router.push('/auth')
    }
    // if (adminRoute.includes(pathname) && (!loggedIn || user.role !== 'admin'))
    // {
    //   router.push('/auth')
    // }
  }, [pathname, loggedIn, user])
  return (
    <RouteContext.Provider value={{}}>
      {children}
    </RouteContext.Provider>
  );
}

export function useRouteContext() {
  return useContext(RouteContext);
}