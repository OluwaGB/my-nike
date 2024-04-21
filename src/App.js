import logo from './logo.svg';
import './App.css';
import Sections from './component/nike1';
import Section2 from './component/nike2';
import Conditional from './component/conditional';
import ElementVariable from './component/ElementVariable';

function App() {
  return (
    <div className="App">
      <Sections/>
      <Section2/>
      <Conditional IsGoal={true}/>
      <ElementVariable isLoggedIn ={true}/>
    </div>
  );
}

export default App;
