import './LoginAndRegister.scss';
import Add from '../../img/addAvatar.png'
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,storage, db } from '../../firebase.js'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import {Link, useNavigate} from 'react-router-dom'



function Register() {
    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const hadleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].files[0];

        try {
            //Create user
            const res = await createUserWithEmailAndPassword(auth, email, password);
      
            //Create a unique image name
            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);
      
            await uploadBytesResumable(storageRef, file).then(() => {
              getDownloadURL(storageRef).then(async (downloadURL) => {
                try {
                  //Update profile
                  await updateProfile(res.user, {
                    displayName,
                    photoURL: downloadURL,
                  });
                  //create user on firestore
                  await setDoc(doc(db, "users", res.user.uid), {
                    uid: res.user.uid,
                    displayName,
                    email,
                    photoURL: downloadURL,
                  });
                    //create empty user chats on firestore
                  await setDoc(doc(db, "userChats", res.user.uid), {});
                  navigate('/')

                } catch (err) {
                  console.log(err);
                  setErr(true);
                  setLoading(false);
                }
              });
            });
          } catch (err) {
            setErr(true);
            setLoading(false);
          }
        };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">React Chat</span>
                <span className="title">Register</span>
                <form onSubmit={hadleSubmit}>
                    <input type="text" placeholder="John ST" />
                    <input type="email" placeholder="john@abv.bg" />
                    <input type="password" placeholder="password" />
                    <input style={{ display: 'none' }} type="file" id='file' />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                    {loading && "Uploading and compressing the image please wait..."}
                    {err && <span style={{color:'red'}}>Something went wrong....!</span> }
                </form>
                <p>You have account? <Link className='Link' to={'/login'}>Login</Link></p>
            </div>
        </div>
    )
}

export default Register