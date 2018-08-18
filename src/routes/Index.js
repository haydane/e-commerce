import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../views/Home';

export default class Index extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path='/' component={Home}/>
                </div>
            </BrowserRouter>
        )
    }
}