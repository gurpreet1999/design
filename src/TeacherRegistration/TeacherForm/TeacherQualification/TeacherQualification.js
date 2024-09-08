import React from 'react'
import "./TeacherQualification.scss"

const TeacherQualification = () => {
  return (
    <div className='teacherQualification' >
      <form action="">
        <h1>Education</h1>
        <p>Tell students the higher education that you've completed or are working on</p>

        <div className="checkbox">
          <input type="checkbox" name="" id="" />
          <h5>I don't have a higher education degree</h5>
        </div>

        <div className="univ">
          <label htmlFor="">University</label>
          <input placeholder="E.g. Mount Royal University" type="text" />
        </div>

        <div className="degree">
          <label htmlFor="">Degree</label>
          <input placeholder="E.g. Bachelor's degree in the English Language" type="text" />
        </div>

        <div className="degreetype">
          <label htmlFor="">Degree type</label>
          <select name="" id="">
            <option value="">Choose degree type...</option>
          </select>
        </div>

        <div className="spec">
          <label htmlFor="">Specialization</label>
          <input placeholder="E.g. Teaching English as a Foreign Language" type="text" />
        </div>

        <div className="yearof">
          <label htmlFor="">Years of Study</label>
          <div className="years">
            <select name="" id="">
              <option value="">Select</option>
            </select>
            <select name="" id="">
              <option value="">Select</option>
            </select>
          </div>
        </div>

        <div className="badge">
          <h2>Get a "Diploma Verified" badge</h2>
          <p>Upload your diploma to boost your credibility! Our team will review it and add the badge to your profile.
            Once reviewed, your files will be deleted.</p>
          <h4>JPG or PNG format; maximum size of 20MB.</h4>
          <input type="file" name="" id="" />
        </div>

        <h6>Add another education</h6>

        <div className="btns">
          <button className="back">Back</button>
          <button className="save">Save and continue</button>
        </div>
      </form>
    </div>
  )
}

export default TeacherQualification
