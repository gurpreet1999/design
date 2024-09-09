import React from 'react'
import "./StudentPreference.scss"

const StudentPreference = () => {
  return (
    <div className='studentPreference' >


        <h1>More Prefernce</h1>
        <p>Age of tutor:
           </p>
       <div class="cardContainer">
<div class="card">20-30</div>
<div class="card">20-30</div>
<div class="card">20-30</div>
<div class="card">20-30</div>
<div class="card">20-30</div>


       </div>  
       
    


        <h1>do you hava a gender Prefernce?</h1>
        <div class="cardContainer">
            <div class="card"><img src="./img/avatar.png"/>Male</div>
            <div class="card"><img/>Female</div>
            </div>
 




    </div>
  )
}

export default StudentPreference