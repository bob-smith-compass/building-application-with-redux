import React from 'react'
import {Route} from 'react-router-dom'
import Home from './components/home/Home';
import About from './components/about/About';
import Header from './components/common/Header';

export default function App() {
    return (
        <div>
            <div className="container-fluid">
                <Header />
                <Route exact path="/" component={Home} />
                <Route exact about="/" component={About} />
            </div>
            Application
        </div>
    )
}