import React, { createContext, useContext, useState } from "react";

interface IAppContext {
    isAuthenticated: boolean;
    setIsAuthenticated: (v: boolean) => void;
    user: IUser | null;
    setUser: (v: IUser | null) => void;
}

const CurrentAppContext = createContext<IAppContext | null>(null);

type Props = {
    children: React.ReactNode;
}

export const AppProvider = (props: Props) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null>(null);

    return (
        <CurrentAppContext.Provider value={{
            isAuthenticated, setIsAuthenticated, user, setUser
        }}>
            {props.children}
        </CurrentAppContext.Provider>
    );
};

export const useCurrentApp = () => {
    const currentAppContext = useContext(CurrentAppContext);

    if (!currentAppContext) {
        throw new Error(
            "useCurrentAppContext has to be used within <CurrentAppContext.Provider>"
        );
    }

    return currentAppContext;
};