import '../Components.scss'
import Add from '../../img/add.png'
import Cam from '../../img/cam.png'
import More from '../../img/more.png'
import Messages from '../Messages/Messages.jsx'
import Input from '../Input/Input.jsx'
import { useContext } from 'react'
import { ChatContext } from '../../Context/ChatContext'


function Chat() {

  const { data} = useContext(ChatContext)

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat