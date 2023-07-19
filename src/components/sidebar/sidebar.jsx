import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
            src='https://images.unsplash.com/photo-1610730297006-ed0e847c34f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
            alt=''
        />
        <p> Our mission is to provide you with valuable and engaging content that enriches your knowledge, sparks inspiration, and encourages meaningful discussions.</p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
            <li className='sidebarListItem'>life</li>
            <li className='sidebarListItem'>music</li>
            <li className='sidebarListItem'>style</li>
            <li className='sidebarListItem'>sport</li>
            <li className='sidebarListItem'>tech</li>
            <li className='sidebarListItem'>cinema</li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW ME</span>
        <div className='sidebarSocial'>
        <i className ="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className ="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className ="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className ="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}
