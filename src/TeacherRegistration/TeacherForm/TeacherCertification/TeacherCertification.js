import React from 'react'
import "./TeacherCertification.scss"

const TeacherCertification = () => {
  return (
    <div className='teacherCertification'>
      <form action="">
        <h1>Teaching certification</h1>
        <p>Do you have teaching certificates? If so, describe them to enhance your profile credibility and get more
          students.</p>
        
        <div className="checkbox">
          <input type="checkbox" name="" id="" />
          <h5>I don't have a teaching certificate</h5>
        </div>

        <div className="subj">
          <div className="field">
            <label htmlFor="">Subject</label>
            <select name="" id="">
              <option value="">English</option>
            </select>
          </div>
          <div className="delete">
            <i className="ri-delete-bin-6-line"></i>
          </div>
        </div>

        <div className="cert">
          <label htmlFor="">Certification</label>
          <select name="" id="">
            <option value="">Select verified certificate</option>
          </select>
        </div>
        
        <p className="write">Write the name exactly as it appears on your certificate</p>

        <div className="checkbox">
          <input type="checkbox" name="" id="" />
          <h5>My certificate is not on the list</h5>
        </div>

        <div className="years">
          <label htmlFor="">Years of study</label>
          <div className="inputs">
            <select name="" id="">
              <option value="">Select</option>
            </select>
            <select name="" id="">
              <option value="">Select</option>
            </select>
          </div>
        </div>

        <div className="upload">
          <h2>Upload your certificate</h2>
          <p>Our team will manually review your submission</p>
          <button>Upload</button>
          
          <div className="tip">
            <i className="ri-information-line"></i>
            <p>Only authentic documents will be accepted. Any false information can result in the disapproval or
              suspension of your account.</p>
          </div>
          
          <h4>JPG or PNG format; maximum size of 20MB.</h4>
        </div>

        <h6>Add another certificate</h6>

        <div className="btns">
          <button className="back">Back</button>
          <button className="save">Save and continue</button>
        </div>
      </form>
    </div>
  )
}

export default TeacherCertification
