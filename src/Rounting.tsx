import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Pages/Login/Login';
import RootContext from "./context/root-context";
import { userTypes } from './types/user';

const routes = [
    { path: "/login", component: Login }
]

export default function Rounting() {
    const [userDetails, setuserDetails] = useState<userTypes | null>(null)

    const updateUserDetails = (user: userTypes | null) => {
        setuserDetails(user)
    }

    return (
        <RootContext.Provider value={{
            userdetails: userDetails,
            updateuserdetails: updateUserDetails
        }}>
    <Router>
        <Switch>
            {
                routes.map(res => <Route path="/login" component={Login} exact />)
            }
        </Switch>
    </Router>
        </RootContext.Provider >
    )
}
