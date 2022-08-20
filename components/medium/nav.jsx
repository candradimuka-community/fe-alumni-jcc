import {ChevronDoubleDownIcon, ChevronDoubleUpIcon} from '@heroicons/react/outline'
import { useState } from 'react'
import Image from 'next/image'


const NavItem = () => {
    return (<>
        <p className='cursor-pointer text-white'>Work</p>
        <p className='cursor-pointer text-white'>Divisions</p>
        <p className='cursor-pointer text-white'>About Us</p>
        <p className='cursor-pointer text-white'>Free Resources</p>
        <p className='cursor-pointer text-white'>Contact Us</p>
    </>)
}

const Nav = () => {
    const [bar, setBar] = useState(false)
    return (
        <div className="w-full fixed top-0 bg-transparent backdrop-blur-[1px]">
            <div className="container mx-auto p-2 md:py-[32px] flex justify-between items-center relative">
                <div className="bg-slate-200 w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden">
                    <Image src={'https://s3-alpha-sig.figma.com/img/ef57/4b10/95152edb973c74e75ba9f47251c1e5a5?Expires=1661731200&Signature=KUvZbsbqYfG7RzIWPyPNsn3H-QC0wGn6nUyoxC044zOFcOi7A3gzQXxpuxcauIrLV7CvKfSf~7sKXe0MecHUHTO4lWmbK68H46YfNWlFEdWKhYZejUQrNjzKd4~IRCQKObKgqLabBvHOAIMXj1V3RW8hPMHVrYW0boeFwna4MGvmWFbA6yWUHfodpfp9yVtLQb5qJGaHRNyba-Q7eT-o1tzPPfF1IYNp5tPmtNwPHzHwU-b5BCxdSLv5Rk2yzoGO-4-AKOlEXs19BRnfHsUR2igOA4CFlaPzQ2cWQBwo874HnPkFXh5J1WhnfMt670msx6YrFFd92K4spT~Hh5eAIA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'} alt="alumni" width={100} height={100}  />
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
                        <ChevronDoubleDownIcon className='w-[25px] h-[25px] text-white'/>
                    )}
                </div>
                {bar && (
                    <div className="md:hidden flex flex-col gap-2 absolute top-full right-4 p-3 bg-slate-500/90 border border-slate-100 w-2/5">
                        <NavItem/>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Nav;