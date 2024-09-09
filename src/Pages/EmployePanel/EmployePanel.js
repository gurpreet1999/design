import React from 'react'

import "./EmployePanel.scss"

const EmployePanel = () => {
  return (
    <div className='employePanel'>

<div class="sidebar">
        <a href="#" class="logo">
            <i class='bx bx-code-alt'></i>
            <div class="logo-name"><span>Asmr</span>Prog</div>
        </a>
        <ul class="side-menu">
            <li><a href="#"><i class='bx bxs-dashboard'></i>Dashboard</a></li>
         
            <li class="active"><a href="#"><i class='bx bx-analyse'></i>Leads</a></li>
            <li><a href="#"><i class='bx bx-message-square-dots'></i>Tickets</a></li>
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







<div className='optionContainer'>



<div className='card'>+ Add Teacher</div>
<div className='card'>+ Generate Lead</div>

<div className='card'> Send an update</div>
<div className='card'>My targets</div>






</div>


<div className='myTargets'>



<div className='card'>
<div className='icon'></div>

<div className='leadDescription'>

<div>
<h6>Gurpreet singh</h6>
<p>dwarka,sector-1,new delhi</p>
</div>


<div className=''>

    status:pending
    createdAt:-02/04/2024
</div>

</div>
<div className='buttons'></div>


</div>
<div className='card completed'>
<div className='icon'></div>

<div className='leadDescription'>

<div>
<h6>Gurpreet singh</h6>
<p>dwarka,sector-1,new delhi</p>
</div>


<div className=''>

    status:pending
    createdAt:-02/04/2024
</div>

</div>
<div className='buttons'></div>


</div>
</div>




<div className='feedbackForm'>


<form action="">
        <h1>Lead Id:-2</h1>
        
        
        <div className="name">
          <label htmlFor="">Teacher Assigned</label>
          <input type="text" />
        </div>

       

        <div className="mail">
          <label htmlFor="">Description</label>
          <input type="email" />
        </div>

        <div className="mail">
          <label htmlFor="">Status</label>
         <select>
            <option>Completed</option>
         </select>
        </div>
     

        <button>Save and close Lead</button>
      </form>


</div>



<div className='updateAdmin'>



<form action="">
        <h1>Lead Id:-2</h1>
        
        
        <div className="name">
          <label htmlFor="">Status</label>
          <select>
            <option>Pending</option>
          </select>
        </div>

       

      
      
     

        <button>Send Update</button>
      </form>



</div>






   </div>





    </div>
  )
}

export default EmployePanel