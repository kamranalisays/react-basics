import maleavatar from './images/maleavatar.jpg'
import './App.css';

// Creating component Profile


function Profile()
{
  return(
    <div>
      <img src={maleavatar}  alt="avatar" />
    </div>
  );
}


function App() {
  return (
   <div>
    <Profile/>
   </div>
  );
}

export default App;
