import './LoginAndRegister.scss';
import { useState } from 'react';
import { auth } from '../../firebase.js'
import {Link, useNavigate} from 'react-router-dom'
import {  signInWithEmailAndPassword } from "firebase/auth";


function Login() {


    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const hadleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value

        try {   
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/')
          } catch (err) {
            setErr(true);
          }
        };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">React Chat</span>
                <span className="title">Login</span>
                <form onSubmit={hadleSubmit}>
                    <input type="email" placeholder="john@abv.bg" />
                    <input type="password" placeholder="password" />
                    <button>Sign up</button>
                </form>
                
                <p>You don`t have account? <Link className='Link' to={'/register'}>Register</Link></p>
                
            </div>
        </div>
    )
}

export default Login