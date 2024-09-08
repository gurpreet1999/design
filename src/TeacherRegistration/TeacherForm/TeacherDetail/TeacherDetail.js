import React from 'react'
import "./TeacherDetail.scss"

const TeacherDetail = () => {
  return (
    <div className='teacherDetail'>
      <form action="">
        <h1>About</h1>
        <p>
          Start creating your public tutor profile. Your progress will be automatically saved as you complete each
          section. You can return at any time to finish your registration.
        </p>
        
        <div className="name">
          <label htmlFor="">First name</label>
          <input type="text" />
        </div>

        <div className="name">
          <label htmlFor="">Last name</label>
          <input type="text" />
        </div>

        <div className="mail">
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>

        <div className="col">
          <div className="lang">
            <p>Languages you speak</p>
            <select name="" id="">
              <option value="">Afrikaans</option>
            </select>
            <select name="" id="">
              <option value="">English</option>
            </select>
          </div>

          <div className="level">
            <p>Level</p>
            <select name="" id="">
              <option value="">Native</option>
            </select>
            <select name="" id="">
              <option value="">C1</option>
            </select>
          </div>

          <div className="delete">
            <i className="ri-delete-bin-6-line"></i>
            <i className="ri-delete-bin-6-line"></i>
          </div>
        </div>

        <button>Save and continue</button>
      </form>
    </div>
  )
}

export default TeacherDetail
