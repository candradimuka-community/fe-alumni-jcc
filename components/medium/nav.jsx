import {ChevronDoubleDownIcon, ChevronDoubleUpIcon} from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useUserContext } from '../../context/UserContext'


const NavItem = () => {
    return (<>
        <p className='cursor-pointer'>Work</p>
        <p className='cursor-pointer'>Divisions</p>
        <p className='cursor-pointer'>About Us</p>
        <p className='cursor-pointer'>Free Resources</p>
        <p className='cursor-pointer'>Contact Us</p>
    </>)
}

const Nav = () => {
    const {loggedIn, setLogout} = useUserContext()
    const [bar, setBar] = useState(false)
    const [scroll, setScroll] = useState(false)
    useEffect(()=>{
        if(typeof window !== 'undefined'){
            window.onscroll = () =>{
                setScroll(window.scrollY > 0)
            }
        }
    },[])
    return (
        <div className={`w-full fixed top-0 bg-transparent backdrop-blur-[1px] z-40`}>
            <div className="container mx-auto p-2 md:pt-[10px] flex justify-between items-center relative">
                <div className="bg-slate-200 w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden">
                    <Image src={'https://s3-alpha-sig.figma.com/img/ef57/4b10/95152edb973c74e75ba9f47251c1e5a5?Expires=1661731200&Signature=KUvZbsbqYfG7RzIWPyPNsn3H-QC0wGn6nUyoxC044zOFcOi7A3gzQXxpuxcauIrLV7CvKfSf~7sKXe0MecHUHTO4lWmbK68H46YfNWlFEdWKhYZejUQrNjzKd4~IRCQKObKgqLabBvHOAIMXj1V3RW8hPMHVrYW0boeFwna4MGvmWFbA6yWUHfodpfp9yVtLQb5qJGaHRNyba-Q7eT-o1tzPPfF1IYNp5tPmtNwPHzHwU-b5BCxdSLv5Rk2yzoGO-4-AKOlEXs19BRnfHsUR2igOA4CFlaPzQ2cWQBwo874HnPkFXh5J1WhnfMt670msx6YrFFd92K4spT~Hh5eAIA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'} alt="alumni" width={100} height={100}  />
                </div>
                <div className={`block md:hidden cursor-pointer rounded-full  p-3 ${bar? 'bg-slate-200 hover:bg-slate-300':'hover:bg-slate-200 bg-blue-900/50'}`} onClick={()=>setBar(!bar)}>
                    {bar ? (
                        <ChevronDoubleUpIcon className='w-[25px] h-[25px]'/>
                    ):(
                        <ChevronDoubleDownIcon className='w-[25px] h-[25px] text-white'/>
                    )}
                </div>
                <div className={`
                    ${bar ? '' : 'hidden'} 
                    md:block
                    absolute md:static
                    bg-slate-500/90 
                    ${scroll ? 'md:bg-blue-900/50' : 'md:bg-transparent'}
                    top-full 
                    right-4 
                    md:right-0 
                    p-3 
                    md:p-0 
                    md:px-2 
                    border 
                    md:border-none 
                    border-slate-100 
                    w-2/5 
                    md:max-w-fit
                    md:rounded-md
                    z-50 `}>
                    <div className="flex flex-col md:flex-row md:gap-6">
                        <Link href={'/'}>  
                            <a className="text-white hover:text-black">
                                Home
                            </a>
                        </Link>
                        <Link href={'/member'}>  
                            <a className="text-white hover:text-black">
                                Member
                            </a>
                        </Link>
                        <Link href={'/about-us'}>  
                            <a className="text-white hover:text-black">
                                About Us
                            </a>
                        </Link>
                        {loggedIn ? (
                            <>
                                <Link href={'/dashboard'}>  
                                    <a className="text-white hover:text-black">
                                        Dashboard
                                    </a>
                                </Link>
                                <p className="text-white hover:text-black" onClick={setLogout}>
                                    Logout
                                </p>
                            </>
                        ):(
                            <Link href={'/auth'}>  
                                <a className="text-white hover:text-black">
                                    Login
                                </a>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nav;