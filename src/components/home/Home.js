import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="jumbotron">
            <h1>Home</h1>
            <Link to="about" className="btn btn-primary btn-lg" >
                About
            </Link>

        </div>
    )
}
