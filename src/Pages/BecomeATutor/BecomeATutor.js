import React from 'react';
import './TutorProfile.scss';

const BecomeATutor = () => {
  return (
    <div className='BecomeATutor'>
      <section className='header'>
        <div className='header-content'>
          <h1>Make a living by teaching the largest community of learners worldwide</h1>
          <div className='steps'>
            <div className='step'>
              <span>1</span>
              <p><strong>Sign up</strong> <br />To create your tutor profile</p>
            </div>
            <div className='step'>
              <span>2</span>
              <p><strong>Get approved</strong> <br />Via a verification process</p>
            </div>
            <div className='step'>
              <span>3</span>
              <p><strong>Start earning</strong> <br />Students will begin booking lessons</p>
            </div>
          </div>
          <button>Create a tutor profile now</button>
        </div>
        <div className='header-image'>
          <img src='path_to_image_here' alt='Tutor' />
        </div>
      </section>

      <section className='features'>
        <div className='feature'>
          <h3>Set your own rate</h3>
          <p>Choose your hourly rate and change it anytime. On average, English tutors charge $15-$25 per hour.</p>
        </div>
        <div className='feature'>
          <h3>Teach anytime, anywhere</h3>
          <p>Decide when and how many hours you want to teach. No minimum time commitment or fixed schedule.</p>
        </div>
        <div className='feature'>
          <h3>Grow professionally</h3>
          <p>Attend professional development webinars and get tips from our team to grow.</p>
        </div>
      </section>

      <section className='global-teaching'>
        <h2>Teach students from over 180 countries</h2>
        <ul>
          <li>Steady stream of new students</li>
          <li>Smart calendar</li>
          <li>Interactive classroom</li>
          <li>Convenient payment methods</li>
          <li>Professional development webinars</li>
          <li>Supportive tutor community</li>
        </ul>
        <div className='global-image'>
          <img src='path_to_image_here' alt='Global Teaching' />
        </div>
        <button>Create a tutor profile now</button>
      </section>

      <section className='testimonial'>
        <p>“Preply allowed me to make a living without leaving home!”</p>
        <span>Krista A. - English tutor</span>
        <button>Create a tutor profile now</button>
      </section>
    </div>
  );
};

export default  BecomeATutor;
