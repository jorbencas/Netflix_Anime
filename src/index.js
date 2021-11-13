import React from 'react';
import ReactDOM from 'react-dom';
import './styles/colors/dark.css';
import './styles/themes/dark.css';
import './index.css';
import store from "./store";
import { Provider } from "react-redux";
import App from './components/App/App';
//import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    // <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
// </React.StrictMode>
,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();