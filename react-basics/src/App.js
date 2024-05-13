import PackingList from './Components/ConditionalRendering/PackingList';
import Profile from './Components/Profile';
import List from './Components/RenderingList/RenderingList';




function App() {
  return (
   <div>
    <h1>Tutorial : Passing properties to child component "Avatar"  </h1>
    <Profile/>
    <h1>Tutorial : Conditional Rendering  </h1>
    <PackingList/>
    <h1> Tutorial : Rendering List Tutorial </h1>
    <List/>
   </div>
  );
}

export default App;
