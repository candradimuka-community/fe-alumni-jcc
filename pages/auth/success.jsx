import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/mainlayout";
import { useRouter } from "next/router";
const auth = () => {
    const [timer, setTimer] = useState(5)
    const router = useRouter()
    setInterval(()=> {
        setTimer(timer-1)
    }, 1000)
    useEffect(()=> {
        if(timer <=0)
        {
            router.push('/auth')
        }
    }, [timer])
    return (
        <MainLayout>
            <div className="bg-slate-100 h-screen">
                <div className="bg-slate-600/50 w-full h-full pt-[150px] ">
                    <div className="container mx-auto px-2">
                        <div className="w-full">
                            <div className="bg-slate-300 w-4/5 md:w-1/2 p-8 mx-auto rounded-3xl">
                                <p className="text-4xl">Welcome !!</p>
                                <p className="text-3xl">Your Email Successfully Registered</p>
                                <p>You are being redirected in : {timer} sec(s)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default auth