import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Home from './component/Home/Home/Home';
import Contract from './component/Contract/Contract';
import Header from './component/Home/Header/Header';
import About from './component/About/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
