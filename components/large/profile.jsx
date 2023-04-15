import React from "react";
import Input from "../small/input";


const ProfileComp = ({form ={}}) => {
    return (
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
    )
}

export default ProfileComp