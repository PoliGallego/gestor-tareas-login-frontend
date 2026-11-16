import { useEffect, useState } from 'react'
import { PageContext } from './PageContext';
import Login from './components/Login'
import back_arrow from "./assets/img/back-arrow.png";
import { Modal, Button } from "@gestor-tareas/react-components";
import "@gestor-tareas/react-components/styles.css";

function App() {
  const [isMsgShow, setMsgShow] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message && message.trim().length > 0) {
      setMsgShow(true);
    }
  }, [message]);

  useEffect(() => {
    if (!isMsgShow) {
      setMessage("");
    }
  }, [isMsgShow]);

  return (
    <PageContext.Provider value={{ isMsgShow, message, setMessage }}>
      {isMsgShow && <Modal text={message} setShow={setMsgShow} title={'Información'} isChoose={false} />}
      <div className='body'>
        <Button className='back-btn' onClick={() => { history.back() }}>
          <img className='back-img' src={back_arrow} alt="go back" draggable={false} />
        </Button>
        <Login />
      </div>
    </PageContext.Provider>
  )
}

export default App
