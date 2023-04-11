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


const Sidebar = ({ sideBar, handleToggleSidebar }) => {

   const dispatch = useDispatch()

   const logoutHandler = () => {

      dispatch(logout())

   }



   return (
      <nav
         className={sideBar ? "sideBar open" : "sideBar"}
         onClick={() => handleToggleSidebar(false)}>
         <li>
            <MdHome size={23} className="icon" />
            <span>Home</span>
         </li>
         <li>
            <MdSubscriptions size={23} className="icon" />
            <span>Subscriptions</span>
         </li>

         <li>
            <MdThumbUp size={23} className="icon" />
            <span>Liked Video</span>
         </li>

         <li>
            <MdHistory size={23} className="icon" />
            <span>History</span>
         </li>

         <li>
            <MdLibraryBooks size={23} className="icon" />
            <span>Library</span>
         </li>
         <li>
            <MdSentimentDissatisfied size={23} className="icon" />
            <span>I don't Know</span>
         </li>

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