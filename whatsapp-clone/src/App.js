import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';


function App() {

  const [messages, setMessages] = useState([]);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />

      </div>
    </div>
  );
}

export default App;
