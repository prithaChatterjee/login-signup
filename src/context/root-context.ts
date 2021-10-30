import { createContext } from "react";
import { userTypes } from "../types/user";

type RootTypes = {
    userdetails: userTypes | null 
    updateuserdetails: (userdetails: userTypes | null) => void
}

export default createContext<RootTypes>({
    userdetails: null,
    updateuserdetails: (userdetails) => {}
})