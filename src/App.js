
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Componanat/Header';
import Home from './Componanat/Home/Home';
import About from './Componanat/About/About';
import Restaurant from './Componanat/Restaurant/Restaurant';

function App() {
  return (
    <div >
     <Header></Header>
     <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/restaurant" element={<Restaurant></Restaurant>} />
      </Routes>
    </div>
  );
}

export default App;
