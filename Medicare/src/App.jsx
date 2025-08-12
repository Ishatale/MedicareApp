import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar/Navbar';
import Footer from './layout/Footer/Footer';
import Home from './pages/Home/Home';
import Doctors from './pages/Doctors/Doctors';
import Hospitals from './pages/Hospitals/Hospitals';
import Dashboard from './pages/Dashboard/Dashboard';
import ChatBot from './components/common/ChatBot/ChatBot';
import { initializeTheme } from './utils/helpers';
import './styles/globals.scss';
import { useLocation } from 'react-router-dom';
import AuthPage from './components/SignUp/AuthPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/';

  return (
    <div className="App">
      {!isAuthPage && <Navbar />}
      <main>{children}</main>
      {!isAuthPage && <Footer />}
      {!isAuthPage && <ChatBot />}
    </div>
  );
};

const App = () => {
  useEffect(() => {
    // Initialize theme on app load
    initializeTheme();
  }, []);

  return (
    <Router>
      <ScrollToTop />
     <Layout>
          <Routes>
          <Route path="/" element={<AuthPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Layout>
    </Router>
  );
};

export default App;
