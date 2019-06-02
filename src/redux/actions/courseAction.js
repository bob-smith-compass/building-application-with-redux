export function createCourse(course) {
    console.log(`createCourse: ${course}`)
    // return {type: 'CREATE_COURSE', course: course} // Payload = course
    return {type: 'CREATE_COURSE', course} // Payload = course
}