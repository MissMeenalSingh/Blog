import './topbar.css'

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
          src='https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png'
          alt=''>  
        </img>
        <i className="topRightSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
