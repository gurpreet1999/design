import React from 'react'
import "./StudentSubject.scss"

const StudentSubject = () => {
  return (
    <div className='studentSubject' >

<main>
        <h1>Which subject would you like help with?</h1>
        <p>We'll find you an expert tutor from our network – which covers over 30+ subjects.</p>

        <div class="cardContainer">
   <div class="card">
    <img src="./img/subject-maths.svg"/>
    <p>Maths</p>
   </div>
   <div class="card">
    <img src="./img/subject-biology.svg"/>
    <p>Biology</p>
   </div>
   <div class="card">
    <img src="./img/subject-chemistry.svg"/>
    <p>Chemistry</p>
   </div>
   <div class="card">
    <img src="./img/subject-english.svg"/>
    <p>English</p>
   </div>
   <div class="card">
    <img src="./img/subject-physics.svg"/>
    <p>Physics</p>
   </div>

        </div>


        <div class="searchBox">

   <input/>

        </div>
    </main>




    </div>
  )
}

export default StudentSubject