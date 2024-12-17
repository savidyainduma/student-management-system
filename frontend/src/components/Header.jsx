import React from 'react'
import './Header.css'
import { HiOutlineUserCircle } from "react-icons/hi2";
const Header = () => {
  return (
    <div className='header'>
        <div className="header-title">
        <h1>PupilPro</h1>
        </div>
        <HiOutlineUserCircle color='white' className='user-icon' style={{fontSize:"45px", marginRight:"20px", cursor:"pointer"}} onClick={} />
        
        
    </div>
  )
}

export default Header
