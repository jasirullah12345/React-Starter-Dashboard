import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useLocalStorage} from "../../utils/hooks/localstorage";
import {useDispatch} from "react-redux";
import {RESET_STORE} from "../../store/actionTypes";

const SignOut = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // eslint-disable-next-line no-unused-vars
    const [authToken, setAuthToken] = useLocalStorage("auth-token", null);


    useEffect(() => {
        // Reset Store
        dispatch({type: RESET_STORE});

        // Remove Auth Token from Local Storage
        setAuthToken(null);

        navigate("/signin");
    }, []);

    return (
        <>
            <h1>SignOut</h1>
        </>
    );
};

export default SignOut;
