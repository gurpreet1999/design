import React from 'react'
import "./TeacherSubject.scss"

const TeacherSubject = () => {
  return (
    <div  className='teacherSubject'>



<main>
        <h1>Select Subjects</h1>
        <h3>Select the levels you want to tutor</h3>
        <div class="search">
            <i class="ri-search-line"></i>
            <input placeholder="Enter the subject name to search" type="text"/>
        </div>
        <h5>Selected Subjects</h5>
        <div class="sub-container">
            <div class="subjects">
                <select name="" id="">
                    <option value="">Maths</option>
                </select>
                <div class="classes">
                    <button>Class 1-5</button>
                    <button>Class 6-10</button>
                    <button>Class 10-12</button>
                    <button>Graduation</button>
                    <button>Competitive</button>
                </div>
                <p>Add your Custom Classes</p>
                <textarea name="" id=""></textarea>
            </div>
            <button class="rembtn">Remove</button>
        </div>
        <div class="btmsub-container">
            <select name="" id="">
                <option value="">Science</option>
            </select>
            <button class="rembtn">Remove</button>
        </div>
    </main>










    </div>
  )
}

export default TeacherSubject