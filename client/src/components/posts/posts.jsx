import Post from '../post/post.jsx'
import './posts.css'

export default function Posts({posts}) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p}/>
      ))}
    </div>
  )
}
