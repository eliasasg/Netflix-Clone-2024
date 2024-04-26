import React from 'react'
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
            <div className='header_left'>
                <ul>
                    <li><img src={NetflixLogo} alt="Netflix log" width="100"/></li>
                    <li>Netflix</li>
                    <li>Home</li>
                    <li>TvShow</li>
                    <li>Movies</li>
                    <li>Latese</li>
                    <li>MYList</li>
                    <li>Browse By Languages</li>
                </ul>

            </div>
            <div className='header-left'>
                <ul>
                    <li><SearchIcon/> </li>
                    <li><NotificationsNoneIcon /> </li>
                    <li><AccountBoxIcon /> </li> 
                    <li><ArrowDropDownIcon /> </li>
                
                </ul>


            </div>

        </div>

    </div>
  )
}

export default Header