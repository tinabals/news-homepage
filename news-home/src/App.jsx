import './App.css';
import {NavBar} from './components/NavBar';
import {Hero} from './components/Hero';

function App() {
  return (
    <div className='container px-2 md:px-6 mx-auto'>
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
