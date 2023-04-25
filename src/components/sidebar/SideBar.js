import React from "react"
import "./_sideBar.scss"

import {
   MdSubscriptions,
   MdExitToApp,
   MdThumbUp,
   MdHistory,
   MdLibraryBooks,
   MdHome,
   MdSentimentDissatisfied,
} from "react-icons/md"
import { useDispatch } from "react-redux"
import { logout } from '../../redux/actions/auth.action'
import { Link } from "react-router-dom"


const Sidebar = ({ sideBar, handleToggleSidebar }) => {

   const dispatch = useDispatch()

   const logoutHandler = () => {

      dispatch(logout())

   }



   return (
      <nav
         className={sideBar ? "sideBar open" : "sideBar"}
      // onClick={() => handleToggleSidebar(false)}
      >

         <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
               <MdHome size={23} className="icon" />
               <span>Home</span>
            </li>
         </Link>
         <Link to='/feed/subscriptions' style={{ textDecoration: 'none' }}>
            <li>
               <MdSubscriptions size={23} className="icon" />
               <span>Subscriptions</span>
            </li>
         </Link>

         <Link to='/about' style={{ textDecoration: 'none' }}>
            <li>
               <MdLibraryBooks size={23} className="icon" />
               <span>About</span>
            </li>
         </Link>

         <hr />

         <li onClick={logoutHandler}>
            <MdExitToApp size={23} className="icon" />
            <span>Log Out</span>
         </li>

         <hr />
      </nav>
   )
}

export default Sidebar