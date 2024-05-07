import React from 'react'
import { NavLink } from 'react-router-dom';
import "./header.css"
import NetflixLogo from "../../assets/images/NetflixLogo.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';




const Header = () => {
 

  return (


    <div className='header_outer_container'>
        <div className='header_container'>
            
              <div className='Nav'>
                <ul className='NavbarWrapper'>
                  <li className='NavLogo'><NavLink className='link' to="#"><img src={NetflixLogo} alt="Netflix log" width="100"/></NavLink> </li>
                  <li className='NavElement'><NavLink className='link' to="https://www.netflix.com/browse
"> Home</NavLink></li>
                  <li className='NavElement'><NavLink className='link' to="https://www.netflix.com/browse/genre/83
">TvShow</NavLink></li>
                  <li className='NavElement'><NavLink className='link' to="https://www.netflix.com/browse/genre/34399
">Movies</NavLink></li>
                  <li className='NavElement'><NavLink className='link' to="https://www.netflix.com/latest
">Latest</NavLink></li>
                  <li className='NavElement'><NavLink className='link' to="https://www.netflix.com/browse/my-list
">My List</NavLink></li>
                  <li className='NavElement'><NavLink className='link' to="https://www.netflix.com/browse/original-audio">Browse By Languages</NavLink></li>
                  <ul className='icons'>
                    <li className='SearachIcon'><SearchIcon/></li>
                    <li className='NotifIcon'><NotificationsNoneIcon /></li>
                    <li className='AccIcon'><AccountBoxIcon /></li>
                    <li className='ArrowIcon'><ArrowDropDownIcon /></li>
                  </ul>
                
                  
                </ul>
              

              </div>
          </div>
    </div>
  )
}

export default Header