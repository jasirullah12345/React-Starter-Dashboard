import React from 'react';
import {useLocalStorage} from "../../utils/hooks/localstorage";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [authToken, setAuthToken] = useLocalStorage("auth-token", "");

    const signUp = () => {
        // API request to sign up
        setAuthToken("Secret Token 123");
        navigate("/");
    }

    return (
        <>
            <button onClick={signUp}>SignUp</button>
        </>
    );
};

export default SignUp;
