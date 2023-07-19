import Header from '../../header/header.jsx'
import Sidebar from '../../sidebar/sidebar.jsx'
import Posts from '../../posts/posts.jsx'
import './homePage.css'

export default function HomePage() {
  return (
    <>
      <Header/>
      <div className='home'>
        <Posts/>
        <Sidebar/>
    </div>
    </>

  )
}
