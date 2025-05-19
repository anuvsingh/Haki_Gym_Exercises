import React from 'react'
import 'react-horizontal-scrolling-menu/dist/styles.css';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
