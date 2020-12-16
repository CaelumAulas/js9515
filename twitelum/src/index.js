import React from "react";
import ReactDOM from "react-dom";

// CSSs Globais
import "./assets/css/reset.css";
import "./assets/css/container.css";
import "./assets/css/btn.css";
import "./assets/css/icon.css";
import "./assets/css/iconHeart.css";
import "./assets/css/notificacao.css";
import "./assets/css/novoTweet.css";

// store
import store from './store';
import { Provider } from 'react-redux';

// Roteamento
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes.js";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routing />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById("root")
);

