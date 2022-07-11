import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/news' element={<News></News>}></Route>
        <Route path='/about' elemnt={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
