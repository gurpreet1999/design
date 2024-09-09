import React from 'react'
import "./AdminPanel.scss"
import profile from "../../Assets/profile.png"

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


<div className='studentProfile'>

<h1>Student profile:</h1>


<div className='name'>
<figure>
    <img src={profile}/>
</figure>
<h1>Gurpreet Singh</h1>
</div>
<div className='contact'>
<figure>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="8" fill="#FFD6D6"/>
<path d="M22.5417 14.1666C23.3556 14.3254 24.1036 14.7235 24.69 15.3099C25.2764 15.8963 25.6745 16.6443 25.8333 17.4583M22.5417 10.8333C24.2327 11.0211 25.8096 11.7784 27.0135 12.9808C28.2174 14.1831 28.9767 15.7591 29.1667 17.4499M28.3333 24.0999V26.5999C28.3343 26.832 28.2867 27.0617 28.1937 27.2744C28.1008 27.487 27.9644 27.6779 27.7934 27.8348C27.6224 27.9917 27.4205 28.1112 27.2006 28.1855C26.9808 28.2599 26.7478 28.2875 26.5167 28.2666C23.9523 27.988 21.4892 27.1117 19.325 25.7083C17.3115 24.4288 15.6044 22.7217 14.325 20.7083C12.9166 18.5343 12.0402 16.0591 11.7667 13.4833C11.7458 13.2528 11.7732 13.0206 11.8471 12.8013C11.9209 12.582 12.0396 12.3805 12.1956 12.2096C12.3516 12.0387 12.5415 11.9022 12.7531 11.8087C12.9648 11.7152 13.1936 11.6668 13.425 11.6666H15.925C16.3294 11.6626 16.7215 11.8058 17.0281 12.0695C17.3348 12.3332 17.535 12.6995 17.5917 13.0999C17.6972 13.9 17.8929 14.6855 18.175 15.4416C18.2871 15.7399 18.3114 16.064 18.2449 16.3757C18.1784 16.6873 18.024 16.9733 17.8 17.1999L16.7417 18.2583C17.9279 20.3445 19.6554 22.072 21.7417 23.2583L22.8 22.1999C23.0266 21.9759 23.3126 21.8215 23.6243 21.755C23.9359 21.6885 24.26 21.7128 24.5583 21.8249C25.3144 22.107 26.0999 22.3027 26.9 22.4083C27.3048 22.4654 27.6745 22.6693 27.9388 22.9812C28.203 23.2931 28.3435 23.6912 28.3333 24.0999Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</figure>






<h1>91759782684</h1>
</div>
<div className='email'>
<figure>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="8" fill="#C9FFCB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 12H14C11.7909 12 10 13.7909 10 16V25C10 27.2091 11.7909 29 14 29H26C28.2091 29 30 27.2091 30 25V16C30 13.7909 28.2091 12 26 12ZM14 13.59H26C27.0657 13.592 28.0025 14.2966 28.3 15.32L20.76 20.91C20.5534 21.112 20.2732 21.221 19.9843 21.2115C19.6955 21.2021 19.423 21.0751 19.23 20.86L11.72 15.33C12.0118 14.3097 12.9389 13.6022 14 13.59ZM11.59 25C11.59 26.331 12.669 27.41 14 27.41H26C27.3271 27.4045 28.4 26.3271 28.4 25V16.97L21.6 21.97C21.1654 22.3746 20.5938 22.5997 20 22.6C19.3827 22.5902 18.7911 22.3514 18.34 21.93L11.59 16.93V25Z" fill="black"/>
</svg>
</figure>
<h1>gurpreet@gmail.com</h1>
</div>




</div>

<div className='tutionRequired'>






<div className='cardHeader'><div className='card'>
    <h6 >Tution for</h6>
<p>Class xi to xii tutions</p>
</div>
<div className='card'>
    <h6 >Board</h6>
<p>CBSE</p>
</div>


<div className='card'>
    <h6 >Mode</h6>
<p>Home (private tutor)</p>
</div>


</div>

<div className='cardBody'>
<div className='card'>
    <h6 >subject</h6>
    <div className='badgeContainer'>

    <div className='badge'>Math</div>
<div className='badge'>Physics</div>
<div className='badge'>Chemistry</div>


    </div>

</div>




<div className='card'>
    <h6 >days preference</h6>
    <div className='dayPreference'>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="8" fill="#A0E2FF" fill-opacity="0.95"/>
<path d="M23.3333 11.5833V14.7499M16.6667 11.5833V14.7499M12.5 17.9166H27.5M14.1667 13.1666H25.8333C26.7538 13.1666 27.5 13.8755 27.5 14.7499V25.8333C27.5 26.7077 26.7538 27.4166 25.8333 27.4166H14.1667C13.2462 27.4166 12.5 26.7077 12.5 25.8333V14.7499C12.5 13.8755 13.2462 13.1666 14.1667 13.1666Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>   
    <div className='badgeContainer'>

<div className='badge'>Monday</div>
<div className='badge'>Tuesday</div>
<div className='badge'>friday</div>


</div>
    </div>

</div>

<div className='card'>
    <h6 >Timing preference</h6>


<div className='timing'>
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_135_393)" filter="url(#filter0_d_135_393)">
<path d="M36 0H12C7.58172 0 4 3.58172 4 8V32C4 36.4183 7.58172 40 12 40H36C40.4183 40 44 36.4183 44 32V8C44 3.58172 40.4183 0 36 0Z" fill="#FF91AB"/>
<g clip-path="url(#clip1_135_393)">
<path d="M24 15.0001V20.0001L27.3334 21.6667M32.3334 20.0001C32.3334 24.6025 28.6024 28.3334 24 28.3334C19.3976 28.3334 15.6667 24.6025 15.6667 20.0001C15.6667 15.3977 19.3976 11.6667 24 11.6667C28.6024 11.6667 32.3334 15.3977 32.3334 20.0001Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
<defs>
<filter id="filter0_d_135_393" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_135_393"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_135_393" result="shape"/>
</filter>
<clipPath id="clip0_135_393">
<rect width="40" height="40" fill="white" transform="translate(4)"/>
</clipPath>
<clipPath id="clip1_135_393">
<rect width="20" height="20" fill="white" transform="translate(14 10)"/>
</clipPath>
</defs>
</svg>
<div className='badgeContainer'>

<div className='badge'>evening(5:00-8:00)</div>
<div className='badge'>morning(6:00-8:00)</div>



</div>
</div>


</div></div>
<div className='cardFooter'>
    
    
    
    <div className='card'>
    <h6 >Location</h6>


   <div className='location'>  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="8" fill="#FFC0EA" fill-opacity="0.95"/>
<g clip-path="url(#clip0_135_369)">
<path d="M27.5 18.3333C27.5 24.1666 20 29.1666 20 29.1666C20 29.1666 12.5 24.1666 12.5 18.3333C12.5 16.3441 13.2902 14.4365 14.6967 13.03C16.1032 11.6234 18.0109 10.8333 20 10.8333C21.9891 10.8333 23.8968 11.6234 25.3033 13.03C26.7098 14.4365 27.5 16.3441 27.5 18.3333Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 20.8333C21.3807 20.8333 22.5 19.714 22.5 18.3333C22.5 16.9525 21.3807 15.8333 20 15.8333C18.6193 15.8333 17.5 16.9525 17.5 18.3333C17.5 19.714 18.6193 20.8333 20 20.8333Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_135_369">
<rect width="20" height="20" fill="white" transform="translate(10 10)"/>
</clipPath>
</defs>
</svg> <p>Noida , phase-2, Delhi</p></div>
</div>
</div>




</div>

</div>

<div class="reminders">
                    <div class="header">
                       
                        <h3>Teacher Assigned</h3>
                       
                    </div>
                    <ul class="task-list">
                        <li class="completed">
                            <div class="task-title">
                              
                                <p>Aman agarwal</p>
                            </div>
                            <i class='bx bx-dots-vertical-rounded'></i>
                        </li>
                        <li class="completed">
                            <div class="task-title">
                              
                                <p>maharaja singh</p>
                            </div>
                            <i class='bx bx-dots-vertical-rounded'></i>
                        </li>
                        <li class="completed">
                            <div class="task-title">
                               
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