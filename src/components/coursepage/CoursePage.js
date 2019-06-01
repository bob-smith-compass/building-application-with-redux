import React, { Component } from 'react'

export default class CoursePage extends Component {
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
        // event.preventDefalut()
        const course = {...this.state.course, title: event.target.value};
        this.setState({course})
    }
    render() {
        return (
            <form>
                {JSON.stringify(this.state)}
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input onChange={this.handleChange} value={this.state.course.title} />
                <input type="submit" value="Save"/>
                
            </form>
        )
    }
}
