import React, {useContext} from 'react';
import AuthContext from "../AuthContext";

const Login = () => {
    const authUser = useContext(AuthContext);

    return (
        <a className="button loginButton is-info" title="Login to user profile">Login</a>
    );
}

export default Login;