import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../layout/dashboardLayout";
import Input from "../../../components/small/input";
import Swal from "sweetalert2";
import { useUserContext } from "../../../context/UserContext";
import useApi from "../../../hooks/API";

const Profile = () => {
    const { user, token } = useUserContext()
    const [form, setForm] = useState({})
    const [loading, setLoading] = useState(false)
    const GetProfile = async(uid) => {
        setLoading(true)
        const {data, status} = await useApi({
            path:'users/'+uid,
            method:'GET',
            token
        })
        if(status === 200)
        {
            setForm({...data.data})
        } else {
            Swal.fire({
                icon: 'error',
                title: 'something error',
                text
            })
        }
        setLoading(false)
    }
    useEffect(()=>{
        GetProfile(user.id)
    }, [])
    return (
        <DashboardLayout>
            <div className="w-full p-4 rounded-lg border flex flex-row space-x-4">
                <div className="basis-1/2">
                    <Input
                        type="string"
                        id="first_name"
                        label="First Name"
                        disabled={true}
                        state={form}
                    />
                    <Input
                        type="string"
                        id="middle_name"
                        label="Middle Name"
                        disabled={true}
                        state={form}
                    />
                    <Input
                        type="string"
                        id="last_name"
                        label="Last Name"
                        disabled={true}
                        state={form}
                    />
                    <Input
                        type="blank"
                    />
                    <Input
                        type="date"
                        id="birth_date"
                        label="Birth Date"
                        disabled={true}
                        state={form}
                    />
                    <Input
                        type="string"
                        id="birth_city"
                        label="Birth City"
                        disabled={true}
                        state={form}
                    />
                        
                </div>
                <div className="basis-1/2">
                    <Input
                        type="email"
                        id="email"
                        label="Email"
                        disabled={true}
                        state={form}
                    />
                    <Input
                        type="string"
                        id="phone"
                        label="Phone"
                        disabled={true}
                        state={form}
                    />
                    <Input
                        type="blank"
                    />
                    <Input
                        type="string"
                        id="telegram_user_id"
                        label="UUID Telegram"
                        disabled={true}
                        state={form}
                    />
                    <Input
                        type="string"
                        id="telegram_user_name"
                        label="Username Telegram"
                        disabled={true}
                        state={form}
                    />
                    
                </div>
            </div>
        </DashboardLayout>
    )
}
export default Profile