import React, {useContext} from 'react'
import AuthContext from "../../components/AuthContext";
import DefaultLayout from "../../layouts/default";
const jwt = require('jsonwebtoken');

const AuthCallback = ({query}) => {
    const jwtToken = query.token;
    if (!jwtToken) return  ErrorNotification("No token supplied");

    return (
        <DefaultLayout title="Auth Callback">
            <AuthScreen jwtToken={jwtToken}/>
        </DefaultLayout>
    )
};

const AuthScreen = ({jwtToken}) => {
    // Check if the JWT is valid before we store it in local storage
    let decodedJwt;
    try {
        decodedJwt = jwt.decode(jwtToken);
    } catch (err) {
        return ErrorNotification("Unable to decode JWT")
    }

    const authUser = useContext(AuthContext);
    authUser.setAuthUser(jwtToken);

    return (
        <div>{jwtToken}</div>
    );
};

AuthCallback.getInitialProps = ({query}) => {
    return {query}
};

const ErrorNotification = (message) => (
    <div>An error occurred: {message}</div>
);

export default AuthCallback;