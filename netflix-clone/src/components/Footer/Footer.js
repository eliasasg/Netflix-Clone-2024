// import React from 'react'
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import "./footer.css"

// const Footer = () => {
//   return (
//     <div className='footer_outer_container'>
//       <div className='footer_inner_container'>
//         <div className='footer_icons'>
//           <FacebookOutlinedIcon />
//           <InstagramIcon />
//           <YouTubeIcon />
//         </div>
//         <div className='footer_data'>
//           <div>
//             <ul>
//               <li>Audio Desciption</li>
//               <li>Invester Relations</li>
//               <li>Legal Notice</li>
//             </ul>
//           </div>
//           <div>
//             <ul>
//               <li>Help Center</li>
//               <li>Jobs</li>
//               <li>Cookie Preferences</li>
//             </ul>
//           </div>
//           <div>
//             <ul>
//               <li>Gift Cards</li>
//               <li>Terms of Use</li>
//               <li>Corporate Information</li>
//             </ul>
//           </div>
//           <div>
//             <ul>
//               <li>Media Center</li>
//               <li>Privacy</li>
//               <li>Contact Us</li>
//             </ul>
//           </div>
//         </div>

//         <div className='service_code'>
//             <p>
//               Service Code
//             </p>

//         </div>
//         <div className='copy-write'>
//             &copy; 1997-2024 Netflix, Inc.
//         </div>
//       </div>
//     </div>

    
//   )
// }

// export default Footer

import React from 'react'
import "../Footer/footer.css"
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { MdHome } from "react-icons/md";
import { IoGameControllerSharp } from "react-icons/io5";
import { MdOutlineDownloading } from "react-icons/md";
import { MdOutlineSmartDisplay } from "react-icons/md";


const Footer = () => {
  return (
    <div className='footer'>
      <div className='smhomeLinks'>
        <ul >
          <li className='home'><MdHome size={32} /></li>
          <li className='game'><IoGameControllerSharp size={32}/></li>
          <li className='newsHot'><link className='link' to="#"></link><MdOutlineSmartDisplay size={32}/></li>
          <li className='download'><MdOutlineDownloading size={32}/></li>
        </ul>
      </div>
      <div className='innerFooterLinks'>
        <div className="footer-icons">
          <ul className='socialMedia'>
            <li><CiFacebook size={32}/></li>
            <li><FaInstagram size={32}/></li>
            <li><CiYoutube size={32}/></li>
          </ul>        
        </div>
        <div>
          <ul className='FooterLinkWrapper'>
            <li className='audio'>Audio Desciption  </li>
            <li>Invester Relations</li>
            <li>Legal Notice</li>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        
          <button className='service'>
          <div className='service-btn'>Service Code</div>
          </button>
          <p className='copyright-text'>© 1997-2024 Netflix, Inc.</p>
      </div>
    </div>
        
  )
}

export default Footer