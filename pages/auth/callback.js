import React, {useState} from 'react'
const jwt = require('jsonwebtoken');

const AuthCallback = ({query}) => {
    const jwtToken = query.token;
    if (!jwtToken) return  ErrorNotification("No token supplied");

    // Check if the JWT is valid before we store it in local storage
    let decodedJwt;
    try {
        decodedJwt = jwt.decode(jwtToken);
    } catch (err) {
        return ErrorNotification("Unable to decode JWT")
    }

    console.log(decodedJwt)
    return (
        <div>{decodedJwt.displayName}</div>
    )
};

AuthCallback.getInitialProps = ({query}) => {
    return {query}
};

const ErrorNotification = (message) => (
    <div>An error occurred: {message}</div>
);

export default AuthCallback;