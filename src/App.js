import { ReactComponent as Logo } from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import a_logo from './app/assets/img/a_logo.jpg';

function App() {
  return (
    <div className="App">
      <Navbar color='black' sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={a_logo} alt='rescue logo'/>
          </NavbarBrand>
        </Container>
      </Navbar>
      <header className="App-header">
        <Logo style={{ height: 300 }} />
        <h1>Hello</h1>
      </header>
    </div>
  );
}

export default App;
