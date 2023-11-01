import { Link } from 'react-router-dom'
import './login.css'
import { useContext, useRef } from 'react'
import { Context } from '../../../context/Context'
import axios from 'axios'

export default function Login() {

    const userRef = useRef()
    const passRef = useRef()

    const { user, dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START"})
        try {
            const res = await axios.post('/auth/login', {
                username: userRef.current.value,
                password: passRef.current.value
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" })
        }
    }
    console.log(user)
    return (
        <div className='login'>
            <form className='loginForm' onSubmit={handleSubmit}>
                <div className='loginTitle'>LOGIN</div>
                <label className='loginLabel'>Username</label>
                <input className='loginInput' type='text' placeholder='Enter your username....' ref={userRef}></input>
                <label className='loginLabel'>Password</label>
                <input className='loginInput' type='password' placeholder='Enter your password....' ref={passRef}></input>
                <button className='loginBtn' type='submit' disabled={isFetching}>Login</button>
                <button className='loginRegisterBtn'>
                    <Link className='Link' to='/register'>Register</Link>
                </button>
            </form>

        </div>
    )
}
