import React from 'react';
import { JWTProvider as AuthProvider } from './contexts/JWTContext';
import Snackbar from "./components/@extended/Snackbar";
import ScrollTop from "./components/ScrollTop";
import RTLLayout from "./components/RTLLayout";
import Locales from "./components/Locales";
import ThemeCustomization from "./themes";
import Routes from './routes';

const App = () => {
    return (
        <ThemeCustomization>
            <RTLLayout>
                <Locales>
                    <ScrollTop>
                        <AuthProvider>
                            <>
                                <Routes />
                                <Snackbar />
                            </>
                        </AuthProvider>
                    </ScrollTop>
                </Locales>
            </RTLLayout>
        </ThemeCustomization>
    );
};

export default App;
