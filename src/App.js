import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/home/Home';
import About from './components/about/About';
import Header from './components/common/Header';
import PageNotFound from './components/notfound/PageNotFound';
/**
 * immutable librqries for
 */
import producer from 'immer'
import CoursePage from './components/coursepage/CoursePage';

/**
 * State - simple
 */
let s = {
    name: 'David',
    address: {
        state: 'IL'
    }
}
let newState = Object.assign({}, s, {name: 'David Shams'})
s.address.state = 'ON'
// newState = Object.assign({}, s, {name: 'David Shams'})

function ConnectedApp() {
    return (
        <div>
            <div className="container-fluid">
                <Header />
                {JSON.stringify(newState)}
                <CoursePage />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact about="/about" component={About} />
                    <Route exact about="/about" component={PageNotFound} />
                </Switch>
            </div>
            Application
        </div>
    )
}

const App = ConnectedApp
export default App