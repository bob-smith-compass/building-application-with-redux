import React from 'react'
import ReactDOM from 'react-dom'
import './main.css'

function Hi() {
    return (<div id="container">
        <ul id="flex-container">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
        </ul>
    <div className="flex-item">1</div>
    <div className="flex-item">2</div>
    <div className="flex-item">3</div>
    <div className="flex-item">4</div>
    <div className="flex-item">5</div>
        </div>)
}

ReactDOM.render(<Hi />, document.getElementById('app'))