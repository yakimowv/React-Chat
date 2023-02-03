import './Home.scss'
import SideBar from '../../Components/Sidebar/Sidebar'
import Chat from '../../Components/Chat/Chat'

function Home() {
  return (
    <div className='home'>
        <div className="container">
          <SideBar/>
          <Chat/>
        </div>
    </div>
  )
}

export default Home