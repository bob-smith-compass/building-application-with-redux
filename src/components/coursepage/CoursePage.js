import React, { Component } from 'react'
import {connect} from 'react-redux'

class CoursePage extends Component {
    // constructor(props){
    // super(props)
    // this.state = {
    state = {
        course: {
            title: ""
        }
    }
    // this.setState = this.setState.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    // }
    handleChange = (event) => {
        // handleChange(event) {
        const course = { ...this.state.course, title: event.target.value };
        this.setState({ course })
    }
    handleSubmit = (event) => {
        // console.log(event);
        event.preventDefault();
        console.log(`this.state.course.title: `)
        console.log(this.state.course.title)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {JSON.stringify(this.state)}
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input onChange={this.handleChange} value={this.state.course.title} />
                <input type="submit" value="Save" />

            </form>
        )
    }
}

function mapStateToProps() {
    
}
function mapDispatchToProps() {
    
}
export default connect(mapStateToProps, mapDispatchToProps) (CoursePage)