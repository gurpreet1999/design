import React from 'react'
import "./StudentEmail.scss"

const StudentEmail = () => {
  return (
    <div className='studentEmail'>


        <form action="">
          <h1>Nice to meet you, ddd. What’s your email?</h1>
          <p>Let's get your account set up so you can start browsing tutors.</p>
          <div className="name">
            <input type="text" placeholder="Enter your email address" />
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <p>I would like to receive news, tips, and offers by email</p>
          </div>
          <button>Next</button>
        </form>
        <p>By clicking next you agree to our Terms and Conditions and Privacy Policy</p>
 



    </div>
  )
}

export default StudentEmail