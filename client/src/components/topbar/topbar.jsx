import './topbar.css'
import {
  Link
} from "react-router-dom";
import { Context } from '../../context/Context.js'
import { useContext } from 'react'

export default function Topbar() {
  const { user } = useContext(Context)
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className="topLeftIcon fa-brands fa-square-facebook"></i>
        <i className="topLeftIcon fa-brands fa-square-twitter"></i>
        <i className="topLeftIcon fa-brands fa-square-pinterest"></i>
        <i className="topLeftIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className='topCenter'>
        <ul className='topCenterList'>
          <li className='topCenterListItem'>
            <Link className='Link' to='/'>HOME</Link>
          </li>
          <li className='topCenterListItem'>
            <Link className='Link' to='/about'>ABOUT</Link></li>
          <li className='topCenterListItem'>
            <Link className='Link' to='/contact'>CONTACT</Link></li>
          <li className='topCenterListItem'>
            <Link className='Link' to='/write'>WRITE</Link></li>
          <li className='topCenterListItem'>{
            user && <Link className='Link' to='/logout'>LOGOUT</Link>
          }
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {
          user ? <img className='topRightProfile'
            src='https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png'
            alt=''>
          </img> :
            <>
              <ul className='topCenterList'>
                <li className='topCenterListItem'>
                  <Link className='Link' to='/register'>REGISTER</Link></li>
                <li className='topCenterListItem'>
                  <Link className='Link' to='/login'>LOGIN</Link></li>
              </ul>
            </>
        }

        <i className="topRightSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div >
  )
}
