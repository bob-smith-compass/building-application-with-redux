import React from 'react'
import ReactDOM from 'react-dom'

function Hi() {
    return (<p>React!</p>)
}

ReactDOM.render(<Hi />, document.getElementById('app'))