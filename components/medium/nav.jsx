import {ChevronDoubleDownIcon, ChevronDoubleUpIcon} from '@heroicons/react/outline'
import { useState } from 'react'


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
    const [bar, setBar] = useState(false)
    return (
        <div className="bg-slate-100 relative">
            <div className="container mx-auto p-2 md:py-[32px] flex justify-between items-center">
                <div className="bg-slate-200 w-[50px] h-[50px] md:w-[100px] md:h-[100px]">

                </div>
                <div className="hidden md:block">
                    <div className="flex md:gap-6">
                        <NavItem/>
                    </div>
                </div>
                <div className={`block md:hidden cursor-pointer rounded-full  p-3 ${bar? 'bg-slate-200 hover:bg-slate-300':'hover:bg-slate-200'}`} onClick={()=>setBar(!bar)}>
                    {bar ? (
                        <ChevronDoubleUpIcon className='w-[25px] h-[25px]'/>
                    ):(
                        <ChevronDoubleDownIcon className='w-[25px] h-[25px]'/>
                    )}
                </div>
            </div>
            {bar && (
                <div className="bock md:hidden flex flex-col gap-2 absolute top-full right-4 p-3 bg-white border border-slate-100 w-2/5">
                    <NavItem/>
                </div>
            )}
        </div>
    )
}
export default Nav;