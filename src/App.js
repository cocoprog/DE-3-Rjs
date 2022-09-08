import logo from './logo.svg';
import './App.css';
import { Header } from './components';
import NavBar from './components/NavBar';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />      
      <Header />
      <main className="App-content">
        <ItemListContainer />
        <img src={logo} className="App-logo" alt="logo" />
      </main>
    </div>
  );
}

export default App;
