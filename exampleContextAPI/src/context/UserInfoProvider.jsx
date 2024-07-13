import { useState } from "react";
import UserInfo from "./UserInfo";

const UserInfoProvider = ({children}) => {

    const [user, setUser] = useState(null);

    return (
        <UserInfo.Provider value={{user, setUser}}>
            {children}
        </UserInfo.Provider>
    )
}

export default UserInfoProvider;