import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';


function App() {
  const titulo = "Prop test de funcion"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClassComponent titulo="Prop test de clase" numero={5}/>
        {/* <FunctionalComponent titulo={titulo} numero={3} booleano={true} />   */}
      </header>
    </div>
  );
}

export default App;
