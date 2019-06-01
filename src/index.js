import React from 'react'
import ReactDOM from 'react-dom'
import './main.css'

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
            <SimpleComponent />

            </ul>
            {/* <div className="flex-item">1</div>
    <div className="flex-item">2</div>
    <div className="flex-item">3</div>
    <div className="flex-item">4</div>
    <div className="flex-item">5</div> */}
        </div>
    )
}

ReactDOM.render(<Hi />, document.getElementById('app'))