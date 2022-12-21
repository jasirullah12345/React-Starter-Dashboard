import React from 'react';
import ReactDOM from 'react-dom/client';
import {PersistGate} from "redux-persist/integration/react";
import {RouterProvider} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import {Provider} from "react-redux";
import {persistor, store} from "./store";
import {theme} from "./plugins/mui";
import {router} from "./router";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <RouterProvider router={router}/>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
