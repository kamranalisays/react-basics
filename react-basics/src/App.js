import PackingList from './Components/ConditionalRendering/PackingList';
import Profile from './Components/Profile';
import List from './Components/RenderingList/RenderingList';
import TeaSet from './Components/PureFunction/TeaSet';
import ButtonForPlayMovie from './Components/RespondingEvents/EventHandlers';
import Gallery from './Components/Hook/Gallery';




function App() {
  return (
   <div>
    <h1>Tutorial 1: Passing properties to child component "Avatar"  </h1>
    <Profile/>
    <h1>Tutorial 2: Conditional Rendering  </h1>
    <PackingList/>
    <h1> Tutorial 3: Rendering List Tutorial </h1>
    <List/>
    <h1> Tutorial 4 : Pure Function </h1>
    <TeaSet/>
    <h1> Tutorial 5 : Event Handlers Function </h1>
    <ButtonForPlayMovie/>
    <h1> Tutorial 6 : Hook </h1>
    <Gallery/>
    </div>

  );
}

export default App;
