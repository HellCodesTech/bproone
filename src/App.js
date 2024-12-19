import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className='A-main'>
      <div className='navbody'>
            
      </div>
      <div className='Routes'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/Project' element={<Projects></Projects>}></Route>
      </Routes>
      </div>
      
    </div>                         
  );
}

export default App;
