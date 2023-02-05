import { Routes, Route } from 'react-router-dom';
import Books from './Books';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/books" element={<Books/>}></Route>
    </Routes>
  );
}

export default App;
