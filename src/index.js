import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './routes/Index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
