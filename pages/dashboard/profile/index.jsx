import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../layout/dashboardLayout";
import Input from "../../../components/small/input";
import Swal from "sweetalert2";
import { useUserContext } from "../../../context/UserContext";
import useApi from "../../../hooks/API";
import ProfileComp from "../../../components/large/profile";

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
            })
        }
        setLoading(false)
    }
    useEffect(()=>{
        GetProfile(user.id)
    }, [])
    return (
        <DashboardLayout>
            <ProfileComp form={form} />
        </DashboardLayout>
    )
}
export default Profile