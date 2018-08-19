import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';

export default class Index extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path='/' component={Home} exact={true}/>
                    <Route path='/about' component={About}/>
                </div>
            </BrowserRouter>
        )
    }
}