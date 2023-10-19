import './App.css';
import ChatRoom from './components/ChatRoom';
import TaskBoard from './components/TaskBoard';

function App() {
  return (
    <div className='container'>
      <ChatRoom/>
      <TaskBoard/>
    </div>
  );
}

export default App;
