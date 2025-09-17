import { createContext, useContext, useState } from "react";
type userData = {
    name: string;
    phone: string;
    address: string;
    year: string;
}

type userContextType = {
    userData: userData;
    setUserData: (partial: Partial<userData>) => void;
}

const defaultUserData = {
    name: "",
    phone: "",
    address: "",
    year: ""
}
const userContext = createContext<userContextType>({
    userData: defaultUserData,
    setUserData: () => { }
});

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [data, setUserData] = useState<userData>(defaultUserData);

    const setData = (partial: Partial<userData>) => {
        setUserData(prev => ({ ...prev, ...partial }))
    };

    return (
        <userContext.Provider value={{ userData: data, setUserData: setData }}>
            {children}
        </userContext.Provider>
    );

}

export default function useUser() {
    return useContext(userContext);
}
