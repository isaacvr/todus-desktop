import React from 'react';
import './App.scss';
import Chat from './components/chat/chat';
import SidePanel from './components/side-panel/side-panel';
import UserList from './components/user-list/user-list';

function App() {
  return (
    <div className="App">
      <SidePanel />
      <UserList />
      <Chat />
    </div>
  )
}

export default App
