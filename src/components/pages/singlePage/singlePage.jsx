import './singlePage.css'
import SinglePost from '../../singlePost/singlePost.jsx'
import Sidebar from '../../sidebar/sidebar'

export default function SinglePage() {
  return (
    <div className='singlePage'>
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}
