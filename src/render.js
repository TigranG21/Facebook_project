import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessage, updateNewMassageText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function renderEntireTree(state) {
    root.render(
        <BrowserRouter>
            <App state={state} addMessage={addMessage} updateNewMassageText={updateNewMassageText}/>
        </BrowserRouter>
    );
}


renderEntireTree()
