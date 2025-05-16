import ChatLogPage from "./component/chatLog/ChatLogPage";
import Sidebar from "./component/sidebar/Sidebar";
import './App.css';

function App() {
  return (
    <div className='admin-index'>
      <Sidebar></Sidebar>
      <div className='admin-index-content'>
        <ChatLogPage></ChatLogPage>
      </div>
    </div>
  );
}
export default App;
