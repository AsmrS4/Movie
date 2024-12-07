import { Route, Routes } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';
import FilmPage from './pages/FilmPage';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/movies' element={<Home />} >
          <Route path=':page' element={<Home />} />
        </Route>
        <Route path='/movie/:id' element={<FilmPage />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
