import { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Rules from './components/Rules';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);

  const openRules = () => {
    setShowModal(true);
  }

  const closeRules = () => {
    setShowModal(false);
  }

  return (

    <div className="App">
      <Header score={score} />
      <Home setScore={setScore} score={score} />
      <Rules openRules={openRules} />
      <Footer />
      {showModal && <Modal closeRules={closeRules} />}
    </div>

  );
}

export default App;
