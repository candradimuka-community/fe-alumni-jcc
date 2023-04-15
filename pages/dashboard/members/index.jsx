import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../layout/dashboardLayout";
import Input from "../../../components/small/input";
import Swal from "sweetalert2";
import { useUserContext } from "../../../context/UserContext";
import useApi from "../../../hooks/API";
import DataTable from "react-data-table-component";
import Button from "../../../components/small/button";

const Profile = () => {
    const { token } = useUserContext()
    const [dataSet, setDataSet] = useState([])
    const [loading, setLoading] = useState(false)
    const GetMember = async() => {
        setLoading(true)
        const {data, status} = await useApi({
            path:'users?limit=9999',
            method:'GET',
            token
        })
        if(status === 200)
        {
            setDataSet([...data?.data?.data])
        } else {
            Swal.fire({
                icon: 'error',
                title: 'something error',
                text
            })
        }
        setLoading(false)
    }
    console.log(dataSet)
    useEffect(()=>{
        GetMember()
    }, [])
    return (
        <DashboardLayout>
            <div className="w-full p-4 rounded-lg border">
                <DataTable 
                    data={dataSet}
                    pagination={true}
                    progressPending={loading}
                    columns={[
                        {
                            name: 'Name',
                            selector: row => `${row.first_name} ${row.middle_name} ${row.last_name}`,
                            sortable: true
                        },
                        {
                            name: 'Email',
                            selector: row => row.email,
                            sortable: true
                        },
                        {
                            name: 'Phone',
                            selector: row => row.phone,
                            sortable: true
                        },
                        {
                            name: 'Telegram ID',
                            selector: row => row.telegram_user_name,
                            sortable: true
                        },
                        {
                            name: 'Role',
                            selector: row => row.role,
                            sortable: true
                        },
                        {
                            name: 'Action',
                            selector: row => {
                                return (
                                    <Button>
                                        Lihat
                                    </Button>
                                )
                            }
                        },
                    ]}
                />
            </div>
        </DashboardLayout>
    )
}
export default Profile