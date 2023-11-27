import './App.css';
import {NavBar} from './components/NavBar';
import {Main} from './components/Main';
import {Footer} from './components/Footer';

function App() {
  return (
    <div className='container px-2 md:px-6 mx-auto'>
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
