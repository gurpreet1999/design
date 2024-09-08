import React from 'react'
import "./AdminPanel.scss"

const AdminPanel = () => {
  return (
    <div  className='teacherPanel' >





<div class="sidebar">
        <a href="#" class="logo">
            <i class='bx bx-code-alt'></i>
            <div class="logo-name"><span>Asmr</span>Prog</div>
        </a>
        <ul class="side-menu">
            <li><a href="#"><i class='bx bxs-dashboard'></i>Dashboard</a></li>
         
            <li class="active"><a href="#"><i class='bx bx-analyse'></i>Leads</a></li>
            <li><a href="#"><i class='bx bx-message-square-dots'></i>Teachers</a></li>
            <li><a href="#"><i class='bx bx-message-square-dots'></i>Employees</a></li>
            <li><a href="#"><i class='bx bx-group'></i>Profile</a></li>
            <li><a href="#"><i class='bx bx-cog'></i>Settings</a></li>
        </ul>
        <ul class="side-menu">
            <li>
                <a href="#" class="logout">
                    <i class='bx bx-log-out-circle'></i>
                    Logout
                </a>
            </li>
        </ul>
    </div>
   

<div className='content-box'>
   
    <div class="navbar">
      
        <nav>
            <i class='bx bx-menu'></i>
            <form action="#">
                <div class="form-input">
                    <input type="search" placeholder="Search..."/>
                    <button class="search-btn" type="submit"><i class='bx bx-search'></i></button>
                </div>
            </form>
           
         
        </nav>

   

       

    </div>

    <div class="analyse">
                <div class="sales">
                    <div class="status">
                        <div class="info">
                            <h3>Total leads</h3>
                            <h1>24,556</h1>
                        </div>
                        <div class="progresss">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div class="percentage">
                                <p>+81%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="visits">
                    <div class="status">
                        <div class="info">
                            <h3>Lead closed</h3>
                            <h1>24,981</h1>
                        </div>
                        <div class="progresss">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div class="percentage">
                                <p>-48%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="searches">
                    <div class="status">
                        <div class="info">
                            <h3>Lead Pending</h3>
                            <h1>14,147</h1>
                        </div>
                        <div class="progresss">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div class="percentage">
                                <p>+21%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

  


            <div class="stepper-wrapper">
  <div class="stepper-item completed">
    <div class="step-counter">1</div>
    <div class="step-name">Lead generated</div>
  </div>
  <div class="stepper-item completed">
    <div class="step-counter">2</div>
    <div class="step-name">Assigned</div>
  </div>
  <div class="stepper-item active">
    <div class="step-counter">3</div>
    <div class="step-name">teacher picked</div>
  </div>
  <div class="stepper-item">
    <div class="step-counter">4</div>
    <div class="step-name">Completed</div>
  </div>
</div>





<div className='leadDescription'>


<div className='leadDetail'>


<div className='studentDetail'>
    <h1>gurpreet</h1>

</div>

<div className='tutionRequired'>

<div className='card'>
    <h6 >Tution for</h6>
<p>Class xi to xii tutions</p>
</div>
<div className='card'>
    <h6 >Board</h6>
<p>CBSE</p>
</div>

<div className='card'>
    <h6 >subject</h6>
<div className='badge'></div>
</div>

<div className='card'>
    <h6 >Mode</h6>
<p>Home (private tutor)</p>
</div>


<div className='card'>
    <h6 >days preference</h6>
    <div className='badge'>monday</div>
</div>

<div className='card'>
    <h6 >Timing preference</h6>
    <div className='badge'>evening(5:00-8:00)</div>
</div>

<div className='card'>
    <h6 >Location</h6>
   <p>Noida , phase-2, Delhi</p>
</div>

</div>

</div>

<div class="reminders">
                    <div class="header">
                        <i class='bx bx-note'></i>
                        <h3>Teacher Assigned</h3>
                        <i class='bx bx-filter'></i>
                        <i class='bx bx-plus'></i>
                    </div>
                    <ul class="task-list">
                        <li class="completed">
                            <div class="task-title">
                                <i class='bx bx-check-circle'></i>
                                <p>Aman agarwal</p>
                            </div>
                            <i class='bx bx-dots-vertical-rounded'></i>
                        </li>
                        <li class="completed">
                            <div class="task-title">
                                <i class='bx bx-check-circle'></i>
                                <p>maharaja singh</p>
                            </div>
                            <i class='bx bx-dots-vertical-rounded'></i>
                        </li>
                        <li class="completed">
                            <div class="task-title">
                                <i class='bx bx-check-circle'></i>
                                <p>elvish yadav</p>
                            </div>
                            <i class='bx bx-dots-vertical-rounded'></i>
                        </li>
                    </ul>
                </div>




</div>




     </div>









    </div>
  )
}

export default AdminPanel