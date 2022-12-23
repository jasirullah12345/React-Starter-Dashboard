import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {ReduxPersisted} from "./store";
import {router} from "./router";
import './index.css';
import MuiThemeCustomization from "./themes";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ReduxPersisted>
            <MuiThemeCustomization>
                <RouterProvider router={router}/>
            </MuiThemeCustomization>
        </ReduxPersisted>
    </React.StrictMode>
);
