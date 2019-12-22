import React from 'react';
import ReactDOM from 'react-dom';
import 'Assets/CSS/App.css';
import 'Assets/CSS/reset.css';
import App from 'Components/Component/App/App';
ReactDOM.render(<App />, document.getElementById('main'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();