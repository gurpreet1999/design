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



    <main className='lead'  >
           
           
           
 <div className='cardContainer'>
               <div className='card'>
               
                 <div className='value blue'>60</div>
                 <div className='title'>New</div>
               </div>
       
               <div className='card'>
               
                 <div className='value red'>16</div>
                 <div className='title'>Missed</div>
               </div>
       
               <div className='card'>
               
                 <div className='value orange'>64</div>
                 <div className='title'>Spoken</div>
               </div>
       
               <div className='card'>
               
                 <div className='value green'>64</div>
                 <div className='title'>Completed</div>
               </div>
       
               <div className='card'>
                 
                 <div className='value voilet '>18</div>
                 <div className='title'>All</div>
               </div>
 </div>
         

 <div className="leadContainer">

  



  <div class="planning">
                <div class="item">
                    <div class="left">
                        <div class="icon">
                            <i class='bx bx-book-alt'></i>
                        </div>


                        
                    </div>
                    <div className='right'>
                    <div class="details">
                            <h5>veer sharma</h5>
                            <p>10 days ago</p>
                        </div>

                        <div className='body'>
              <div className='badge'>class xi to xii tutions</div>
              <div className='badge'>12th std</div>
              <div className='badge'>CBSE</div>
              <div className='badge'>Physics</div>
              <div className='badge'>+2 more</div>

                        </div>
                        <div className='footer'>
                        <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.17846 0.843094C5.14483 -0.299453 7.56183 -0.279483 9.50975 0.895405C11.4385 2.09422 12.6108 4.23376 12.5999 6.5353C12.555 8.82174 11.298 10.971 9.72673 12.6325C8.81985 13.5958 7.80535 14.4475 6.70396 15.1704C6.59053 15.236 6.46628 15.2799 6.33734 15.3C6.21324 15.2947 6.09239 15.258 5.98568 15.1933C4.30418 14.1071 2.829 12.7206 1.6311 11.1006C0.628731 9.74823 0.0592531 8.11441 1.99923e-06 6.42098C-0.00129925 4.11502 1.21209 1.98564 3.17846 0.843094ZM4.31507 7.37541C4.64584 8.19086 5.42658 8.72276 6.29276 8.72277C6.86021 8.72684 7.40569 8.49955 7.80765 8.09153C8.20961 7.68352 8.43465 7.12868 8.43264 6.55065C8.43567 5.66834 7.91623 4.87119 7.11686 4.5314C6.31748 4.19162 5.39586 4.37622 4.78231 4.99902C4.16875 5.62182 3.9843 6.55996 4.31507 7.37541Z" fill="#41C6FF"/>
<ellipse opacity="0.4" cx="6.29956" cy="17.0999" rx="4.5" ry="0.9" fill="#41C6FF"/>
</svg>   <p>
dwarka sector 1,delhi,new delhi</p>
                        </div>
                    </div>
                    <i class='bx bx-dots-vertical-rounded'></i>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="icon">
                            <i class='bx bx-book-alt'></i>
                        </div>


                        
                    </div>
                    <div className='right'>
                    <div class="details">
                            <h5>veer sharma</h5>
                            <p>10 days ago</p>
                        </div>

                        <div className='body'>
              <div className='badge'>class xi to xii tutions</div>
              <div className='badge'>12th std</div>
              <div className='badge'>CBSE</div>
              <div className='badge'>Physics</div>
              <div className='badge'>+2 more</div>

                        </div>
                        <div className='footer'>
                        <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.17846 0.843094C5.14483 -0.299453 7.56183 -0.279483 9.50975 0.895405C11.4385 2.09422 12.6108 4.23376 12.5999 6.5353C12.555 8.82174 11.298 10.971 9.72673 12.6325C8.81985 13.5958 7.80535 14.4475 6.70396 15.1704C6.59053 15.236 6.46628 15.2799 6.33734 15.3C6.21324 15.2947 6.09239 15.258 5.98568 15.1933C4.30418 14.1071 2.829 12.7206 1.6311 11.1006C0.628731 9.74823 0.0592531 8.11441 1.99923e-06 6.42098C-0.00129925 4.11502 1.21209 1.98564 3.17846 0.843094ZM4.31507 7.37541C4.64584 8.19086 5.42658 8.72276 6.29276 8.72277C6.86021 8.72684 7.40569 8.49955 7.80765 8.09153C8.20961 7.68352 8.43465 7.12868 8.43264 6.55065C8.43567 5.66834 7.91623 4.87119 7.11686 4.5314C6.31748 4.19162 5.39586 4.37622 4.78231 4.99902C4.16875 5.62182 3.9843 6.55996 4.31507 7.37541Z" fill="#41C6FF"/>
<ellipse opacity="0.4" cx="6.29956" cy="17.0999" rx="4.5" ry="0.9" fill="#41C6FF"/>
</svg>   <p>
dwarka sector 1,delhi,new delhi</p>
                        </div>
                    </div>
                    <i class='bx bx-dots-vertical-rounded'></i>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="icon">
                            <i class='bx bx-book-alt'></i>
                        </div>


                        
                    </div>
                    <div className='right'>
                    <div class="details">
                            <h5>veer sharma</h5>
                            <p>10 days ago</p>
                        </div>

                        <div className='body'>
              <div className='badge'>class xi to xii tutions</div>
              <div className='badge'>12th std</div>
              <div className='badge'>CBSE</div>
              <div className='badge'>Physics</div>
              <div className='badge'>+2 more</div>

                        </div>
                        <div className='footer'>
                        <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.17846 0.843094C5.14483 -0.299453 7.56183 -0.279483 9.50975 0.895405C11.4385 2.09422 12.6108 4.23376 12.5999 6.5353C12.555 8.82174 11.298 10.971 9.72673 12.6325C8.81985 13.5958 7.80535 14.4475 6.70396 15.1704C6.59053 15.236 6.46628 15.2799 6.33734 15.3C6.21324 15.2947 6.09239 15.258 5.98568 15.1933C4.30418 14.1071 2.829 12.7206 1.6311 11.1006C0.628731 9.74823 0.0592531 8.11441 1.99923e-06 6.42098C-0.00129925 4.11502 1.21209 1.98564 3.17846 0.843094ZM4.31507 7.37541C4.64584 8.19086 5.42658 8.72276 6.29276 8.72277C6.86021 8.72684 7.40569 8.49955 7.80765 8.09153C8.20961 7.68352 8.43465 7.12868 8.43264 6.55065C8.43567 5.66834 7.91623 4.87119 7.11686 4.5314C6.31748 4.19162 5.39586 4.37622 4.78231 4.99902C4.16875 5.62182 3.9843 6.55996 4.31507 7.37541Z" fill="#41C6FF"/>
<ellipse opacity="0.4" cx="6.29956" cy="17.0999" rx="4.5" ry="0.9" fill="#41C6FF"/>
</svg>   <p>
dwarka sector 1,delhi,new delhi</p>
                        </div>
                    </div>
                    <i class='bx bx-dots-vertical-rounded'></i>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="icon">
                            <i class='bx bx-book-alt'></i>
                        </div>


                        
                    </div>
                    <div className='right'>
                    <div class="details">
                            <h5>veer sharma</h5>
                            <p>10 days ago</p>
                        </div>

                        <div className='body'>
              <div className='badge'>class xi to xii tutions</div>
              <div className='badge'>12th std</div>
              <div className='badge'>CBSE</div>
              <div className='badge'>Physics</div>
              <div className='badge'>+2 more</div>

                        </div>
                        <div className='footer'>
                        <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.17846 0.843094C5.14483 -0.299453 7.56183 -0.279483 9.50975 0.895405C11.4385 2.09422 12.6108 4.23376 12.5999 6.5353C12.555 8.82174 11.298 10.971 9.72673 12.6325C8.81985 13.5958 7.80535 14.4475 6.70396 15.1704C6.59053 15.236 6.46628 15.2799 6.33734 15.3C6.21324 15.2947 6.09239 15.258 5.98568 15.1933C4.30418 14.1071 2.829 12.7206 1.6311 11.1006C0.628731 9.74823 0.0592531 8.11441 1.99923e-06 6.42098C-0.00129925 4.11502 1.21209 1.98564 3.17846 0.843094ZM4.31507 7.37541C4.64584 8.19086 5.42658 8.72276 6.29276 8.72277C6.86021 8.72684 7.40569 8.49955 7.80765 8.09153C8.20961 7.68352 8.43465 7.12868 8.43264 6.55065C8.43567 5.66834 7.91623 4.87119 7.11686 4.5314C6.31748 4.19162 5.39586 4.37622 4.78231 4.99902C4.16875 5.62182 3.9843 6.55996 4.31507 7.37541Z" fill="#41C6FF"/>
<ellipse opacity="0.4" cx="6.29956" cy="17.0999" rx="4.5" ry="0.9" fill="#41C6FF"/>
</svg>   <p>
dwarka sector 1,delhi,new delhi</p>
                        </div>
                    </div>
                    <i class='bx bx-dots-vertical-rounded'></i>
                </div>
            </div>










</div>
       

     </main>
     </div>







    </div>
  )
}

export default AdminPanel