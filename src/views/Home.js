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
        {Title: "Home", Path: "/", Icon: AiOutlineHome},
        {Title: "Accounts", Path: "/accounts", Icon: GiWhiteBook},
        {Title: "Customers", Path: "/customers", Icon: MdSwitchAccount},
        {Title: "Search", Path: "/search", Icon: BiSearchAlt},
        {Divider: true},
        {
            Title: "Reports", Path: "/reports", type: "category", Icon: BsFileEarmarkMedical,
            children: [
                {Title: "Monthly", Path: "/reports/monthly", Icon: TbReportSearch},
                {Title: "Defaulter", Path: "/reports/defaulter", Icon: MdPendingActions},
                {Title: "Market", Path: "/reports/market", Icon: BsFileEarmarkBarGraph},
                {Title: "Backup", Path: "/reports/backup", Icon: AiOutlineCloudSync},
            ]
        },
        {Divider: true},
        {Title: "Logout", Path: "/logout", Icon: BiLogOut},
    ]

    return (
        <>
            <Dashboard sideNavLink={sideNavLink}/>
        </>
    );
};

export default Home;
