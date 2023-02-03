import '../Components.scss'
import Navbar from '../Navbar/Navbar.jsx'
import Search from '../Search/Search'
import Chats from '../Chats/Chats'

function Sidebar() {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar