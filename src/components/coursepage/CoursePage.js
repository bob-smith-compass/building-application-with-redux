import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as courseAction from '../../redux/actions/courseAction'
import PropTypes from 'prop-types'

class CoursePage extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }
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
        this.props.dispatch(courseAction.createCourse(this.state.course))
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

// function mapStateToProps(state, ownProps) {
function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}
function mapDispatchToProps() {

}
export default connect(
    mapStateToProps
    // , mapDispatchToProps /** Optional */
    ) (CoursePage)