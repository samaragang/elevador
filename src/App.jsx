import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import Lifts from './pages/Lifts';
import Escalators from './pages/Escalators';
import Parking from './pages/Parking';
import OtherProducts from './pages/OtherProducts';
import Contacts from './pages/Contacts.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/elevador" element={<Home />} />
        <Route path="/lifts" element={<Lifts />} />
        <Route path="/escalators" element={<Escalators />} />
        <Route path="/parking" element={<Parking />} />
        <Route path="/other-products" element={<OtherProducts />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
