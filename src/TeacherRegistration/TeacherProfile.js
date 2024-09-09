import React from 'react'
import TeacherDetail from './TeacherForm/TeacherDetail/TeacherDetail'
import TeacherCertification from './TeacherForm/TeacherCertification/TeacherCertification'
import TeacherQualification from './TeacherForm/TeacherQualification/TeacherQualification'
import TeacherLocation from './TeacherForm/TeacherLocation/TeacherLocation'
import TeacherAvailability from './TeacherForm/TeacherAvailability/TeacherAvailability'
import TeacherSignup from './TeacherForm/TeacherSignup/TeacherSignup'

const TeacherProfile = () => {
  return (
    <div className="multi-step-form">

    <section className='progressContainer'>
    
    <div class="backIcon"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowBackIcon"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg></div>
    
    <div class="progressBar">
    <div class="progress"></div>
    </div>
    
    <div class="crossIcon"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CloseIcon"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></div>
    
    
    
    </section>
    
      <TeacherDetail/>
      {/* <TeacherCertification/>
      <TeacherQualification/>
      <TeacherLocation/>
      <TeacherAvailability/>
      <TeacherSignup/>
          */}
          </div>
  )
}

export default TeacherProfile