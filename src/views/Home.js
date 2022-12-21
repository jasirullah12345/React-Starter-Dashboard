import React from 'react';
import Dashboard from "../components/common/Dashboard";
import {AiOutlineHome, AiOutlineCloudSync} from "react-icons/ai";
import {GiWhiteBook} from "react-icons/gi";
import {TbReportSearch} from "react-icons/tb";
import {MdPendingActions, MdSwitchAccount} from "react-icons/md";
import {BiLogOut, BiSearchAlt} from "react-icons/bi";
import {BsFileEarmarkMedical,BsFileEarmarkBarGraph} from "react-icons/bs";

const Home = () => {
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
        {title: "Logout", path: "/logout", icon: BiLogOut},
    ]

    return (
        <>
            <Dashboard sideNavLink={sideNavLink}/>
        </>
    );
};

export default Home;
