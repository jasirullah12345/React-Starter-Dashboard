import React, {useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {useLocalStorage} from "../utils/hooks/localstorage";

const UnProtectedLayout = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [authToken, setAuthToken] = useLocalStorage("auth-token", null);

    useEffect(() => {
        if (authToken?.length > 0) {
            navigate("/");
        }
    }, []);


    return (
        <>
            <Outlet/>
        </>
    );
};

export default UnProtectedLayout;
