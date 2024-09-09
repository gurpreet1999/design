import React from 'react';
import './BecomeATutor.scss';
import teacher from "../../Assets/teacher.jpg"
import teacherstudent from "../../Assets/teacher-student.jpg"

const BecomeATutor = () => {
  return (
    <div className='BecomeATutor'>
      <section className='heroSection'>
        <div className='left'>
          <h1>Make a living by teaching the largest community of learners worldwide</h1>
   <div class="stepCard">
  <div class="stepper-item completed">
    <div class="step-counter">1</div>
    <div class="step-name">SignUp</div>
    <p>to create your tutor profile</p>
  </div>
  <div class="stepper-item completed">
    <div class="step-counter">2</div>
    <div class="step-name">Get Approved</div>
    <p>by our team in 5 business days</p>
  </div>
  <div class="stepper-item active">
    <div class="step-counter">3</div>
    <div class="step-name">Start Earning</div>
    <p>by teaching students all over the world!</p>
  </div>
 
</div>

          <button>Create a tutor profile now</button>
        </div>
        <div className='right'>
          <img src={teacher} alt='Tutor' />
        </div>
      </section>

      <section className='features'>
        <div className='card'>
          <h3>Set your own rate</h3>
          <p>Choose your hourly rate and change it anytime. On average, English tutors charge $15-$25 per hour.</p>
        </div>
        <div className='card'>
          <h3>Teach anytime, anywhere</h3>
          <p>Decide when and how many hours you want to teach. No minimum time commitment or fixed schedule.</p>
        </div>
        <div className='card'>
          <h3>Grow professionally</h3>
          <p>Attend professional development webinars and get tips from our team to grow.</p>
        </div>
      </section>

      <section className='homeTutor-benefit'>
        <div className='left'>

        <h2>Teach students from over 180 countries</h2>
        <p>Preply tutors teach 800,000+ students globally. Join us and you’ll have everything you need to teach successfully.</p>

        <div className='cardContainer'>
          <div className='card'>Steady stream of new students</div>
          <div className='card'>Interactive classroom</div>
          <div className='card'>Interactive classroom</div>
          <div className='card'>Convenient payment methods</div>
          <div className='card'>Professional development webinars</div>
          <div className='card'>Supportive tutor community</div>


        </div>

        <button>Create a tutor profile now</button>

        </div>
        <div className='right'>


        <img src={teacherstudent} alt='teacher and student' />
        </div>
    
       
      
       
      </section>

      <section className='testimonial'>
      <div className='left'>


<img/>

      </div>
      <div className='right'>
    <h1>“Preply allowed me to make a living without leaving home!”</h1>
    <span>Krista A. - English tutor</span>
    <button>Create a tutor profile now</button>

      </div>

 
      
      </section>
    </div>
  );
};

export default  BecomeATutor;
