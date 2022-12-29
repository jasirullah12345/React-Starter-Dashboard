import ReactDOM from 'react-dom/client';
import {ConfigProvider} from "./contexts/ConfigContext";
import {BrowserRouter} from "react-router-dom";
import {ReduxPersisted} from "./store";
import App from "./app";

// scroll bar
import 'simplebar/src/simplebar.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// apex-chart
import './assets/third-party/apex-chart.css';
import './assets/third-party/react-table.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ReduxPersisted>
        <ConfigProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ConfigProvider>
    </ReduxPersisted>
);
