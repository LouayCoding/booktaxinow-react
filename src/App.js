import { Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Footer from './components/Footer';
import Home from './pages/Home';
import nl from './locales/nl';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

function App() {
const location = useLocation()
  return (
    <>
      <AnimatePresence mode="wait">
        < motion.div key={location.pathname} initial="initialState" animate="animateState" exit="exitState" transition={{duration: 1 }} variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {
          }
        }}>
          <Navbar />
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About title={nl.title} text={nl.text} />}></Route>
          </Routes>
          <Footer />
        </motion.div >
      </AnimatePresence>
    </>

  );
}

export default App;
