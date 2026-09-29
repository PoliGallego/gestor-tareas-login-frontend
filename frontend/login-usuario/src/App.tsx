import { useState } from 'react'
import { PageContext } from './PageContext';
import Login from './Login'
import Info from './Info';

function App() {
  const [message, setMessage] = useState("");
  const isMsgShow = message.trim().length > 0;

  return (
    <PageContext.Provider value={{ message, setMessage }}>
      {isMsgShow && <Info text={message} onClose={() => setMessage("")} />}
      <Login />
    </PageContext.Provider>
  )
}

export default App
