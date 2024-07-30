import './App.css';
import Sidecard from './components/Sidecard'
import Content from './components/Content'
import Nav from './components/Nav'
function App() {
  return (
    <div className="App">
      <div className="box1">
      </div>
      <div className="box2">
      <Sidecard />
      <Content />
      </div>
    </div>
  );
}

export default App;
