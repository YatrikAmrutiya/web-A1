import React from 'react'
import CourseList from '../views/CourseList'
import Analytics from '../views/Analytics'

function Landing() {
  return (
    <div className="d-flex mt-5 landing-container">
        <CourseList />
        <Analytics />
    </div>
  )
}

export default Landing