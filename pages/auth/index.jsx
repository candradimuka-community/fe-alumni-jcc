import React, { useState } from "react";
import MainLayout from "../../layout/mainlayout";
import Input from "../../components/small/input";
import Button from "../../components/small/button";
import { isEmail } from "../../helpers/validation";
import useApi from '../../hooks/API'
import { useUserContext } from "../../context/UserContext";
import Modal from "../../components/medium/modal";
import Swal from "sweetalert2";

const auth = () => {
    const { setLogin } = useUserContext()
    const [form, setForm] = useState({})
    const [err, setErr] = useState('')
    const [modal, setModal] = useState(false)
    const login = async () => {
        const {data, status} = await useApi({
            path:'login',
            method:'POST',
            data:form
        })
        if(status === 200)
        {
            setLogin({tokenData: data.token?.token, userData: data.data})
        } else {
            setErr(data.message ||  data.errors[0]?.message || data)
        }
    }
    const resendEmail = async () => {
        const {data, status} = await useApi({
            path:'resend-verification',
            method:'POST',
            data: {
                email : form.verifEmail
            }
        })
        Swal.fire({
            title: "Information",
            icon: "info",
            text: data.message || data?.errors[0]?.message
        })
        setModal(false)
    }
    return (
        <MainLayout>
            <div className="bg-slate-100 h-screen">
                <div className="bg-slate-600/50 w-full h-full pt-[150px] ">
                    <div className="container mx-auto px-2">
                        <div className="w-full">
                            <div className="bg-slate-300 w-4/5 md:w-1/2 p-8 mx-auto rounded-3xl">
                                <p className="text-3xl">Login To Your Account</p>
                                <hr className="mb-8"/>
                                <Input 
                                    label="Email"
                                    type="email"
                                    id="email"
                                    state={form}
                                    setState={setForm}
                                    isValid={isEmail(form.email)}
                                    message={"Must valid email address"}
                                />
                                <Input 
                                    label="Password"
                                    type="password"
                                    id="password"
                                    state={form}
                                    setState={setForm}
                                    isValid={form.password?.length >= 8}
                                    message={"length is greater or same with 8"}
                                />
                                {err !== '' && <p className="text-red-500">{err}</p>}
                                <div className="flex flex-row justify-between mt-2">
                                    <Button
                                        disabled={!(isEmail(form.email) &&
                                                    form.password?.length >= 8)
                                        }
                                        onClick={login}
                                        variant="blue">
                                        <p className="flex justify-between items-center gap-4 font-semibold">
                                            <span>Login</span>
                                        </p>
                                    </Button>
                                    <Button
                                        onClick={()=>setModal(true)}
                                        variant="yellow">
                                        <p className="flex justify-between items-center gap-4 font-semibold">
                                            <span>Resend Link</span>
                                        </p>
                                    </Button>
                                </div>
                                <p>Don't have an account? Get register link from our bot in Community Group</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal 
                open = {modal} 
                setOpen = {setModal} 
                title = "Resend Verification Email Link" 
                buttonTitle = "Resend"
                onSave={resendEmail}
            >
                <Input 
                    label="Email"
                    type="verifEmail"
                    id="verifEmail"
                    state={form}
                    setState={setForm}
                    isValid={isEmail(form.verifEmail)}
                    message={"must valid email"}
                />
            </Modal>
        </MainLayout>
    )
}

export default auth