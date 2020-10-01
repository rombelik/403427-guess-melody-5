import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';

const numOfError = 5;

ReactDOM.render(
    <App name={numOfError}/>,
    document.getElementById(`root`)
);
