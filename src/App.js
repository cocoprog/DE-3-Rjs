import logo from './logo.svg';
import './App.css';
import { Header } from './components';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />      
      <Header />
      <main className="App-content">
        <img src={logo} className="App-logo" alt="logo" />
      </main>
    </div>
  );
}

export default App;
