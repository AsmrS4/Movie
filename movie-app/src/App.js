import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Home />} />
        <Route path='/profile' element={<Home />} />
        <Route path='/login' element={<Home />} />
        <Route path='/registration' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
