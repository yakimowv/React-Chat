import '../Components.scss'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

function Navbar() {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className='logo'>React Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar