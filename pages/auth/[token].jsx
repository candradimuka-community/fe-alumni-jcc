import React from "react";
import MainLayout from "../../layout/mainlayout";
import Input from "../../components/small/input";
import Button from "../../components/small/button";

const auth = () => {
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
                                    />
                                    <Input 
                                        label="Password"
                                        type="password"
                                        id="password"
                                    />
                                    <Input 
                                        label="Password Confirmation"
                                        type="password"
                                        id="password_confirmation"
                                    />
                                    <Input 
                                        label="Phone Number"
                                        type="text"
                                        id="phone"
                                    />
                                    <Input 
                                        label="Unique Token"
                                        type="text"
                                        id="registerToken"
                                    />
                                </div>
                                <div className="flex-1">
                                    <Input 
                                        label="First Name"
                                        type="text"
                                        id="firstName"
                                    />
                                    <Input 
                                        label="Middle Name"
                                        type="text"
                                        id="middleName"
                                    />
                                    <Input 
                                        label="Last Name"
                                        type="text"
                                        id="lastName"
                                    />
                                    <Input 
                                        label="Birth Date"
                                        type="date"
                                        id="birthDate"
                                    />
                                    <Input 
                                        label="Birth City"
                                        type="text"
                                        id="birthCity"
                                    />
                                </div>
                            </div>
                            <Button
                                className="mt-2"
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

export default auth