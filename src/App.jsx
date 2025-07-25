import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home.jsx';
import Lifts from './pages/Lifts/Lifts.jsx';
import Escalators from './pages/Escalators/Escalators.jsx';
import Parking from './pages/Parking/Parking.jsx';
import OtherProducts from './pages/OtherProducts/OtherProducts.jsx';
import Contacts from './pages/Contacts/Contacts.jsx';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lifts" element={<Lifts />} />
        <Route path="/escalators" element={<Escalators />} />
        <Route path="/parking" element={<Parking />} />
        <Route path="/other-products" element={<OtherProducts />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </Router>
  );
}

export default App;
