import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import MainLayout from "../../layout/mainlayout";
import Input from "../../components/small/input";
import Button from "../../components/small/button";
import { isEmail, isPhone } from "../../helpers/validation";
import useApi from "../../hooks/API";
import Swal from "sweetalert2";

const Auth = () => {
    const [form, setForm] = useState({})
    const router = useRouter()
    const { token } = router.query
    useEffect(()=>{
        setForm({
            ...form,
            'registerToken':token
        })
    },[token, form])
    const Register = async () => {
        const {data, status} = await useApi({
            path:'register',
            method:'POST',
            data:form
        })
        if(status === 201)
        {
            Swal.fire({
                icon: 'success',
                title: 'Success Registered',
                text: data.message
            })
            setInterval(()=>{
                router.push('/')
            },2000)
        } else {
            let text = ''
            // data.errors.forEach(msg => {
            //     text += `${msg.message}
            //     `
            // })
            Swal.fire({
                icon: 'error',
                title: 'something error',
                text
            })
        }
    }
    return (
        <MainLayout>
            <div className="bg-slate-100 h-full">
                <div className="bg-slate-600/50 w-full h-full pt-[150px] pb-[50px] ">
                    <div className="container mx-auto px-2">
                        <div className="w-full">
                            <div className="bg-slate-300 w-4/5 p-8 mx-auto rounded-3xl">
                                <p className="text-3xl">Register New Account</p>
                                <hr className="mb-8"/>
                                <div className="flex flex-col md:flex-row md:space-x-4">
                                    <div className="flex-1">
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
                                        <Input 
                                            label="Password Confirmation"
                                            type="password"
                                            id="password_confirmation"
                                            state={form}
                                            setState={setForm}
                                            isValid={form.password === form.password_confirmation}
                                            message={"length is greater or same with 8"}
                                        />
                                        <Input 
                                            label="Phone Number"
                                            type="text"
                                            id="phone"
                                            state={form}
                                            setState={setForm}
                                            isValid={isPhone(form.phone)}
                                            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '')}
                                        />
                                        <Input 
                                            label="Unique Token"
                                            type="text"
                                            id="registerToken"
                                            disabled={true}
                                            state={form}
                                            setState={setForm}
                                            isValid={form.registerToken !== ''}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <Input 
                                            label="First Name"
                                            type="text"
                                            id="firstName"
                                            state={form}
                                            setState={setForm}
                                            isValid={form.firstName?.length > 0}
                                        />
                                        <Input 
                                            label="Middle Name"
                                            type="text"
                                            id="middleName"
                                            state={form}
                                            setState={setForm}
                                            isValid={form.middleName?.length > 0}
                                        />
                                        <Input 
                                            label="Last Name"
                                            type="text"
                                            id="lastName"
                                            state={form}
                                            setState={setForm}
                                            isValid={form.lastName?.length > 0}
                                        />
                                        <Input 
                                            label="Birth Date"
                                            type="date"
                                            id="birthDate"
                                            state={form}
                                            setState={setForm}
                                            isValid={form.birthDate?.length > 0}
                                        />
                                        <Input 
                                            label="Birth City"
                                            type="text"
                                            id="birthCity"
                                            state={form}
                                            setState={setForm}
                                            isValid={form.birthCity?.length > 0}
                                        />
                                    </div>
                                </div>
                                <Button
                                    className="mt-2"
                                    disabled={!(isEmail(form.email) &&
                                                form.password?.length >= 8 &&
                                                form.password === form.password_confirmation &&
                                                isPhone(form.phone) &&
                                                form.registerToken !== '' &&
                                                form.firstName?.length > 0 &&
                                                form.middleName?.length > 0  &&
                                                form.lastName?.length > 0 &&
                                                form.birthDate?.length > 0 &&
                                                form.birthCity?.length > 0)
                                    }
                                    onClick={Register}
                                    variant="blue">
                                    <p className="flex justify-between items-center gap-4 font-semibold">
                                        <span>Register</span>
                                    </p>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Auth