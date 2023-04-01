import React from "react";
import MainLayout from "../../layout/mainlayout";
import Input from "../../components/small/input";
import Button from "../../components/small/button";

const auth = () => {
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
                            />
                            <Input 
                                label="Password"
                                type="password"
                                id="password"
                            />
                            <Button
                                className="mt-2"
                                variant="blue">
                                <p className="flex justify-between items-center gap-4 font-semibold">
                                    <span>Login</span>
                                </p>
                            </Button>
                            <p>Don't have an account? Get register link from our bot in Community Group</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default auth