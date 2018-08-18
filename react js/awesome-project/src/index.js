import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './routes/Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// setInterval(() => console.log("time"),1000);
registerServiceWorker();
