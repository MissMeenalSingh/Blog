import React from './topbar.css'

export default function Topbar() {
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className ="topLeftIcon fa-brands fa-square-facebook"></i>
        <i className ="topLeftIcon fa-brands fa-square-twitter"></i>
        <i className ="topLeftIcon fa-brands fa-square-pinterest"></i>
        <i className ="topLeftIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className='topCenter'>
        <ul className='topCenterList'>
          <li className='topCenterListItem'>HOME</li>
          <li className='topCenterListItem'>ABOUT</li>
          <li className='topCenterListItem'>CONTACT</li>
          <li className='topCenterListItem'>WRITE</li>
          <li className='topCenterListItem'>LOGOUT</li>
        </ul>
      </div>
      <div className='topRight'>
        <img className='topRightProfile' 
          src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          alt=''
        >  
        </img>
        <i className="topRightSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
