import Header from '../../header/header.jsx'
import Sidebar from '../../sidebar/sidebar.jsx'
import Posts from '../../posts/posts.jsx'
import './homePage.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
export default function HomePage() {

  const [posts,setPosts] = useState([])
  const {search} = useLocation()

  useEffect(()=> {
    const fetchPosts = async () => {
      const res = await axios.get('/posts'+search)
      console.log(res)
      setPosts(res.data)
    }
    fetchPosts()
  },[search])
  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>

  )
}
