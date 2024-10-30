import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface AppContextType {
    expandSidebar: boolean,
    setExpandSidebar: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = ({children}: {children: ReactNode}) => {

    const [expandSidebar, setExpandSidebar] = useState<boolean>(false);

    return (
        <AppContext.Provider
            value={{
                expandSidebar,
                setExpandSidebar
            }}
        >
            {
                children
            }
        </AppContext.Provider>
    )
}