import { useEffect, useState } from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Toolbar, useMediaQuery } from '@mui/material';

// project import
import Drawer from './Drawer';
import Header from './Header';
import navigation from '../../menu-items';
import Breadcrumbs from '../../components/@extended/Breadcrumbs';

// types
import {useLocalStorage} from "../../utils/hooks/localstorage";
import {bindActionCreators} from "redux";
import {menuAction} from "../../store/actions";

// ==============================|| MAIN LAYOUT ||============================== //

const ProtectedLayout = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [authToken, setAuthToken] = useLocalStorage("auth-token", null);

    useEffect(() => {

        // Todo Check if token is valid

        if (!authToken?.length > 0) {
            navigate("/signin");
        }
        // eslint-disable-next-line
    }, []);



    const theme = useTheme();
    const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'));
    const dispatch = useDispatch();
    const {openDrawer} = bindActionCreators(menuAction, dispatch);

    const { drawerOpen } = useSelector((state) => state.menu);

    // drawer toggler
    const [open, setOpen] = useState(drawerOpen);
    const handleDrawerToggle = () => {
        setOpen(!open);
        openDrawer({ drawerOpen: !open });
    };

    // set media wise responsive drawer
    useEffect(() => {
        setOpen(!matchDownLG);
        openDrawer({ drawerOpen: !matchDownLG });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownLG]);

    useEffect(() => {
        if (open !== drawerOpen) setOpen(drawerOpen);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [drawerOpen]);

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Header open={open} handleDrawerToggle={handleDrawerToggle} />
            <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
            <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                <Toolbar />
                <Breadcrumbs navigation={navigation} title titleBottom card={false} divider={false} />
                <Outlet />
            </Box>
        </Box>
    );
};

export default ProtectedLayout;
