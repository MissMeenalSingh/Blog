import './post.css'
import { Link } from "react-router-dom"
export default function Post({ post }) {
    return (
        <div className='post'>

            {post.photo && (
                <img className='postImg'
                    src={post.photo}
                    alt=''
                />
            )}

            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c) => (
                        <span className='postCat'>{c}</span>
                    ))}
                </div>
                <Link to={'/post/' + post._id} className='Link'>
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr />
                <p className='postDesp'>
                    {post.desp} </p>
                <span className='postDate'>{new Date(post.createdAt).toDateString()}</span>
            </div>
        </div>
    )
}
