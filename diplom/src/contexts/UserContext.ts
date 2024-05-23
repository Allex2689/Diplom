import {createContext, Dispatch, SetStateAction} from "react";

interface UserContextValue {
    user: User | null;
    isAuth: boolean;
    setIsAuth: Dispatch<SetStateAction<boolean>>
}

export const UserContext = createContext<UserContextValue>({
    user: null,
    isAuth: false,
    setIsAuth: () => {}
});
