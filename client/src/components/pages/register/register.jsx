import { Link } from 'react-router-dom'
import './register.css'
import { useState } from 'react'
import axios from 'axios'

export default function Register() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState(false)

    const handleSubmit = async (e) => {

        try {
                e.preventDefault()
                const res = await axios.post('/auth/register', {
                    username,
                    email,
                    password
                })

                res.data && window.location.replace('/login')
        } catch (err) {
            setErr(true)
        }
    }
    return (
        <div className='register'>
            <form className='registerForm' onSubmit={handleSubmit}>
                <div className='registerTitle'>REGISTER</div>
                <label className='registerLabel'>Username</label>
                <input className='registerInput' type='text' placeholder='Enter your username....'
                    onChange={e => setUsername(e.target.value)}></input>
                <label className='registerLabel'>Email</label>
                <input className='registerInput' type='email' placeholder='Enter your email....'
                    onChange={e => setEmail(e.target.value)}></input>
                <label className='registerLabel'>Password</label>
                <input className='registerInput' type='password' placeholder='Enter your password....'
                    onChange={e => setPassword(e.target.value)}></input>
                <button className='registerBtn' type='submit'>Register</button>
                <button className='registerLoginBtn'>
                    <Link className='Link' to='/login'>Login</Link>
                </button>
                {err && <span style={{color:'red', marginTop:'10px'}}>Something went wrong!</span>}
            </form>
        </div>
    )
}
