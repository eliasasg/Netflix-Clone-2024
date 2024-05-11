import React from 'react'
import { NavLink } from 'react-router-dom';
import "./header.css"
import NetflixLogo from "../../assets/images/NetflixLogo.png"
import NetflixNlogo from "../../assets/images/netflix-N-logo.jpg"

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';




const Header = () => {
 

  return (




<nav>
<div className='navbar'>

<div className='navlogo'>
<li ><NavLink className='Netflixlogo' to="#"><img src={NetflixLogo} alt="Netflix log" width="100"/></NavLink> </li>
<li ><NavLink className='netflixN' to="#"><img src={NetflixNlogo } alt="Netflix log" width="100"/></NavLink> </li>
</div>
<div className='nav-links'>
    <ul className='links'>
          <div className='NavElement'>
          <li className='NavElement'><NavLink className='link' to="https://www.netflix.com/browse "> Home</NavLink></li>
                  <li className='NavElement'><NavLink className='link' to="https://www.netflix.com/browse/genre/83">TvShow</NavLink></li>
                  <li className='NavElement'><NavLink className='link' to="https://www.netflix.com/browse/genre/34399">Movies</NavLink></li>
                  <li className='NavElement'><NavLink className='link' to="https://www.netflix.com/latest">Latest</NavLink></li>
                  <li className='NavElement'><NavLink className='link' to="https://www.netflix.com/browse/my-list">My List</NavLink></li>
                  <li className='NavElementHome'><NavLink className='link' to="https://www.netflix.com/browse/original-audio">Browse By Languages</NavLink>              
          </li> 
          </div>  
    </ul>
</div>
<div className='icon'>
  <div className='search-box'>
        <input type="text"  placeholder='Search ...'/>
        <ion-icon name="search-outline"></ion-icon>
  </div>
   
    <div>
    <ul className='icons'>
          <li className='NotifIcon'><NotificationsNoneIcon /></li>
          <li className='AccIcon'><AccountBoxIcon /></li>
          <li className='ArrowIcon'><ArrowDropDownIcon /></li>
    </ul>
    </div>
    
</div>

</div>

</nav>
  )
}

export default Header