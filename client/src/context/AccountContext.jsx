import React, { createContext, useState } from "react";

export const AccountContextData = createContext(null);

const AccountContext = ({children}) =>{
    const [account, setAccount] = useState();
    const [person, setPerson]  = useState({});
    return (
        
            <AccountContextData.Provider value={{account,setAccount,person,setPerson}}>
               {children}
            </AccountContextData.Provider>
        
    )
}

export default AccountContext;