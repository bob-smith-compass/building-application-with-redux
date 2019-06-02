import React from 'react'
import ReactDOM from 'react-dom'
import './main.css'
import Home from './components/home/Home';
import {BrowserRouter as Router} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';

/**
 * Real Redux State
 */
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'

const store = configureStore()

const SimpleComponent = (props) => <div>SimpleComponent</div>

function Hi() {
    debugger
    return (
        // <div id="container">
        <div>
            <ul id="flex-container">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>
            <SimpleComponent />

                </li>
            <Home />

            </ul>
            {/* <div className="flex-item">1</div>
    <div className="flex-item">2</div>
    <div className="flex-item">3</div>
    <div className="flex-item">4</div>
    <div className="flex-item">5</div> */}
        </div>
    )
}

// ReactDOM.render(<Router><Provider><App /></Provider></Router>, document.getElementById('app'))
ReactDOM.render(<Router><App /></Router>, document.getElementById('app'))