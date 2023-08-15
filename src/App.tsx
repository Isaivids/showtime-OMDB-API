import { Route, Routes } from 'react-router-dom';
import './App.scss';
import './common/Common.scss'
import Home from './components/home/Home';
import ErrorPage from './components/404/ErrorPage';
import Detail from './components/detail/Detail';
import Navbar from './components/navbar/Navbar';
import Movies from './components/movies/Movies';
import Series from './components/series/Series';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={< Home />}></Route>  
        <Route path='/detail/:id' element={< Detail />}></Route>  
        <Route path='/movies' element={< Movies />}></Route>  
        <Route path='/series' element={< Series />}></Route>  
        <Route path='*' element={< ErrorPage />}></Route>  
      </Routes>
    </div>
  );
}

export default App;
