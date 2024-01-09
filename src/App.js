import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import WorksPage from './pages/WorksPage/WorksPage';
import BlogPage from './pages/BlogPage/BlogPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';
import NotFoudPage from './pages/NotFoundPage/NotFoudPage';
import { useEffect } from 'react';
import School from './pages/School/School';

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/works' element={<WorksPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/school_life' element={<School />} />
        <Route path='/contacts' element={<ContactPage />} />
        <Route path='*' element={<NotFoudPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
