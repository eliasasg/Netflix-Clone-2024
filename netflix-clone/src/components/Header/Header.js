import React from 'react'
import { Link, NavLink } from 'react-router-dom';
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
                  <li className='NavLogo'><Link className='link' to="#"><img src={NetflixLogo} alt="Netflix log" width="100"/></Link> </li>
                  <li className='NavElement'><NavLink className='link' to="#"> Home</NavLink></li>
                  <li className='NavElement'><NavLink className='link' to="#">TvShow</NavLink></li>
                  <li className='NavElement'><NavLink className='link' to="#">Movies</NavLink></li>
                  <li className='NavElement'><NavLink className='link' to="#">Latest</NavLink></li>
                  <li className='NavElement'><NavLink className='link' to="#">My List</NavLink></li>
                  <li className='NavElement'><NavLink className='link' to="#">Browse By Languages</NavLink></li>
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