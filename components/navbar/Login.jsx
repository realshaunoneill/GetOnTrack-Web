import React, {useContext} from 'react';
import {AuthContext} from "../AuthContext";

const Login = () => {
    const authUser = useContext(AuthContext);

    // Check if ID is real then we're logged in
    if (!authUser.userID) {
        return <a className="button loginButton is-info" title="Login to user profile">Login</a>;
    }

    return (
        <span title="Logout">{authUser.userName}</span>
    )
}

export default Login;