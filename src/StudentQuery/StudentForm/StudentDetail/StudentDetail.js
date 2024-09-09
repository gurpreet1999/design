import React from 'react'
import "./StudentDetail.scss"

const StudentName = () => {
  return (
    <div className='studentName'>
     
        <form action="">
          <h1>1  What’s your full name?</h1>
          <div className="name">
            <input type="text" placeholder="Type your First and last name" />
          </div>
          <button>Next</button>
        </form>
     

    

      
    </div>
  )
}


const StudentAge = () => {
  return (
    <div className='studentAge'>
     

    

      
        <form action="">
          <h1>Excellent! What is your date of birth?</h1>
          <p>So we know what academic year you're in</p>
          <div className="name">
            <input type="text" placeholder="DD/MM/YYYY" />
            <p>Example: 03/12/2001</p>
          </div>
          <button>Next</button>
        </form>
    
    </div>
  )
}











export {StudentName ,StudentAge}


