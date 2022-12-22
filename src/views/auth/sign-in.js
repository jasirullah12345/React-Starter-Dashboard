import React from 'react';
import {useLocalStorage} from "../../utils/hooks/localstorage";
import {useNavigate} from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [authToken, setAuthToken] = useLocalStorage("auth-token", null);

    const signIn = () => {
        // API request to sign in
        setAuthToken("Secret Token 123");
        navigate("/");
    }

    return (
        <>
            <button onClick={signIn}>SignIn</button>
        </>
    );
};

export default SignIn;
