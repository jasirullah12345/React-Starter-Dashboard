import React, {useEffect} from 'react';
import Dashboard from "../components/common/Dashboard";
import {AiOutlineCloudSync, AiOutlineHome} from "react-icons/ai";
import {GiWhiteBook} from "react-icons/gi";
import {MdPendingActions, MdSwitchAccount} from "react-icons/md";
import {BiLogOut, BiSearchAlt} from "react-icons/bi";
import {BsFileEarmarkBarGraph, BsFileEarmarkMedical} from "react-icons/bs";
import {TbReportSearch} from "react-icons/tb";
import {useNavigate} from "react-router-dom";
import {useLocalStorage} from "../utils/hooks/localstorage";

const ProtectedLayout = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [authToken, setAuthToken] = useLocalStorage("auth-token", null);

    useEffect(() => {

        // Todo Check if token is valid

        if (!authToken?.length > 0) {
            navigate("/signin");
        }
    }, []);

    const sideNavLink = [
        {title: "Home", path: "/", icon: AiOutlineHome},
        {title: "Accounts", path: "/accounts", icon: GiWhiteBook},
        {title: "Customers", path: "/customers", icon: MdSwitchAccount},
        {title: "Search", path: "/search", icon: BiSearchAlt},
        {Divider: true},
        {
            title: "Reports", path: "/reports", type: "category", icon: BsFileEarmarkMedical,
            children: [
                {title: "Monthly", path: "/reports/monthly", icon: TbReportSearch},
                {title: "Defaulter", path: "/reports/defaulter", icon: MdPendingActions},
                {title: "Market", path: "/reports/market", icon: BsFileEarmarkBarGraph},
                {title: "Backup", path: "/reports/backup", icon: AiOutlineCloudSync},
            ]
        },
        {Divider: true},
        {
            title: "Reports", path: "/reports", type: "category", icon: BsFileEarmarkMedical,
            children: [
                {title: "Monthly", path: "/reports/monthly", icon: TbReportSearch},
                {title: "Defaulter", path: "/reports/defaulter", icon: MdPendingActions},
                {title: "Market", path: "/reports/market", icon: BsFileEarmarkBarGraph},
                {title: "Backup", path: "/reports/backup", icon: AiOutlineCloudSync},
            ]
        },
        {Divider: true},
        {
            title: "Reports", path: "/reports", type: "category", icon: BsFileEarmarkMedical,
            children: [
                {title: "Monthly", path: "/reports/monthly", icon: TbReportSearch},
                {title: "Defaulter", path: "/reports/defaulter", icon: MdPendingActions},
                {title: "Market", path: "/reports/market", icon: BsFileEarmarkBarGraph},
                {title: "Backup", path: "/reports/backup", icon: AiOutlineCloudSync},
            ]
        },
        {Divider: true},
        {title: "Logout", path: "/logout", icon: BiLogOut},
    ]

    return (
        <>
            <Dashboard sideNavLink={sideNavLink}/>
        </>
    );
};

export default ProtectedLayout;
