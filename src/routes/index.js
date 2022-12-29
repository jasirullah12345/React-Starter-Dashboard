import {lazy} from "react";
import {useRoutes} from "react-router-dom";

// project import
import MainLayout from 'layout/MainLayout';
// eslint-disable-next-line no-unused-vars
import CommonLayout from 'layout/CommonLayout';
import Loadable from 'components/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// app import
import {usersRoutes} from "./user";
import {authRoutes} from "./auth";

const DashboardAnalytics = Loadable(lazy(() => import('pages/dashboard')));
const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/404')));

export default function ThemeRoutes() {
    return useRoutes([
        {
            element: (
                <AuthGuard>
                    <MainLayout/>
                </AuthGuard>
            ),
            children: [
                {
                    path: "/",
                    element: <DashboardAnalytics/>,
                },
                ...usersRoutes,
            ]
        },
        ...authRoutes,
        {
            path: '*',
            element: <MaintenanceError/>
        }
    ]);
}