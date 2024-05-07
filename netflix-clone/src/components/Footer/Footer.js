

import React from 'react'
import "../Footer/footer.css"
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { MdHome } from "react-icons/md";
import { IoGameControllerSharp } from "react-icons/io5";
import { MdOutlineDownloading } from "react-icons/md";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='smhomeLinks'>
        <ul >
          <li className='home'><Link className='link' to="https://www.netflix.com/browse
 "><MdHome size={32} /></Link>  </li>
          <li className='game'> <Link className='link' to="https://about.netflix.com/en/news/whats-next-for-netflix-games"><IoGameControllerSharp size={32}/></Link>  </li>
          <li className='newsHot'><Link className='link' to="https://www.whats-on-netflix.com/whats-new/"><MdOutlineSmartDisplay size={32}/></Link> </li>
          <li className='download'><Link className='link' to="https://www.digitaltrends.com/movies/how-to-download-movies-and-tv-shows-from-netflix/"><MdOutlineDownloading size={32}/></Link> </li>
        </ul>
      </div>
      <div className='innerFooterLinks'>
        <div className="footer-icons">
          <ul className='socialMedia'>
            <li><Link className='link' to="https://www.facebook.com/netflix/"><CiFacebook size={32}/></Link>  </li>
            <li><Link className='link' to="https://www.instagram.com/netflix/"><FaInstagram size={32}/></Link>  </li>
            <li><Link className='link' to="https://www.youtube.com/c/Netflix/videos"><CiYoutube size={32}/></Link>  </li>
          </ul>        
        </div>
        <div>
          <ul className='FooterLinkWrapper'>
          <li><Link className='link' to="https://www.netflix.com/browse/audio-description
 
 ">Audio Desciption</Link> </li>
       
            <li><Link className='link' to="https://help.netflix.com/legal/notices 
 ">Legal Notice</Link> </li>
            <li><Link className='link' to="https://help.netflix.com/en/
 ">Help Center</Link> </li>
            <li><Link className='link' to="https://jobs.netflix.com/
 ">Jobs</Link> </li>
            <li><Link className='link' to="https://help.netflix.com/legal/privacy#cookies
 ">Cookie Preferences</Link> </li>
            <li><Link className='link' to="https://www.netflix.com/redeem
 ">Gift Cards</Link> </li>
            <li><Link className='link' to="https://help.netflix.com/legal/termsofuse
 ">Terms of Use</Link> </li>
            <li><Link className='link' to="https://help.netflix.com/en/node/134094  ">Corporate Information</Link> </li>
            <li><Link className='link' to="https://media.netflix.com/en/
 ">Media Center</Link> </li>
            <li><Link className='link' to="https://help.netflix.com/legal/privacy
 ">Privacy</Link> </li>
            <li><Link className='link' to="https://help.netflix.com/en/contactus
">Contact Us</Link> </li>

           
          </ul>
        </div>
        
          <button className='service'>
          <div className='service-btn'><Link className='link' to="https://help.netflix.com/en/node/42109">Service Code</Link> </div>
          </button>
          <p className='copyright-text'>© 1997-2024 Netflix, Inc.</p>
      </div>
    </div>
        
  )
}

export default Footer