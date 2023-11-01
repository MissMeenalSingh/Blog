import './singlePost.css'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function SinglePost() {
    const location = useLocation()
    const id = location.pathname.split('/')[2]

    const [post, setPost] = useState({ desp: '' })

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get('/posts/' + id)
            console.log(res)
            setPost(res.data)
        }
        fetchPost()
    }, [id])

    const formatDescription = (description) => {
        return { __html: description.replace(/\\n/g, '\n').replace(/<br>/g, '\n') };
    };

    return (
        <div className='singlePost'>
            <div className='singlePostWapper'>
                {
                    post.photo && (
                        <img className='singlePostImg'
                            src={post.photo}
                            alt=''
                        />
                    )
                }

                <h1 className='singlePostTitle'>{post.title}
                    <div className='singlePostTitleIcon'>
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-delete-left"></i>
                    </div>
                </h1>
                <div className='singlePostInfo'>
                    <Link to={`/?user=${post.username}`} className='Link'>
                        <span className='singlePostAuthor'>Author: <b>{post.username}</b></span>
                    </Link>
                    <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className='singlePostDesp' dangerouslySetInnerHTML={formatDescription(post.desp)} />
            </div>
        </div>
    )
}
