import React, { useState } from 'react'
import "./_header.scss";

import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdApps } from "react-icons/md"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../assests/Playstream.png';

const Header = ({ handleToggleSidebar }) => {

   const [input, setInput] = useState('');

   const { photoURL } = useSelector(state => state.auth?.user) || "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
   const { name } = useSelector(state => state.auth?.user) || 'DUMMY'

   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log(input);
      navigate(`/search/${input}`)
   }


   return (
      <div className="header ">
         <FaBars
            className="header__menu"
            size={26}
            onClick={handleToggleSidebar}
         />

         <img
            src={logo}
            alt=""
            className="header__logo"
         />

         <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" value={input} onChange={e => setInput(e.target.value)} />
            <button type="submit" >
               <AiOutlineSearch size={22} className='icon' />
            </button>
         </form>

         <dic className="header__icons">
            <h6>{name}</h6>
            <img
               src={photoURL}
               alt="avatar"
            />
         </dic>
      </div>
   )
}

export default Header
