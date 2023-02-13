import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import nl from './locales/nl';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import Article from './components/Article';
import Prices from './components/Prices';
import Contact from './pages/Contact';

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
            <Route path="/" element={<Home title={nl.home.title} text={nl.home.text} />}></Route>
            <Route path="/about" element={<Article title={nl.about.title} text={nl.about.text} class='about' />}></Route>
            <Route path="/luchthavens" element={<Article title={nl.luchthavens.title} text={nl.luchthavens.text} class='luchthavens' />}></Route>
            <Route path="/evenementen" element={<Article title={nl.evenementen.title} text={nl.evenementen.text} class='evenementen' />}></Route>
            <Route path="/populaire-plekken" element={<Article title={nl.populaire_plekken.title} text={nl.populaire_plekken.text} class='madurodam' />}></Route>
            <Route path="/spoed-en-reserveren" element={<Article title={nl.spoed_en_reserveren.title} text={nl.spoed_en_reserveren.text} class='rotterdam' />}></Route>
            <Route path="/horeca" element={<Article title={nl.horeca.title} text={nl.horeca.text} class='horeca' />}></Route>
            <Route path="/fixed-prices" element={<Prices/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            
          </Routes>
          <Footer />
        </motion.div >
      </AnimatePresence>
    </>

  );
}

export default App;
