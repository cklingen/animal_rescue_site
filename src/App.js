import { ReactComponent as Logo } from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Logo style={{ height: 300}}/>
          <h1>Hello</h1>
      </header>
    </div>
  );
}

export default App;
