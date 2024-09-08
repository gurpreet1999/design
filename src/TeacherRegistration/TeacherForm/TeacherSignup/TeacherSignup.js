import React from 'react'
import "./TeacherSignup.scss"

const TeacherSignup = () => {
  return (
    <div className='teacherSignup' >


<main>
        <h1>Verify your phone number</h1>
        <p>Sign up now to get access to exclusive content, personalized recommendations, and more. Make sure to provide
            a valid phone number to secure your account and receive important updates.</p>
        <div class="send">
            <div class="input">
                <img src="img/image 2.png" alt=""/>
                <input placeholder="Enter your phone number" type="text"/>
            </div>
            <button class="sendbtn">Send OTP</button>
        </div>
        <p>Didn't recieved OTP? Resend in 59 seconds</p>
        <h2>Enter OTP</h2>
        <div class="boxes">
            <input maxlength="1" type="text"/>
            <input maxlength="1" type="text"/>
            <input maxlength="1" type="text"/>
            <input maxlength="1" type="text"/>
        </div>
        <button class="verify">Verify</button>
    </main>


    </div>
  )
}

export default TeacherSignup