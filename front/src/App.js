import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from"./components/Register/Register";
import Home from "./components/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path="/login" element={ <Login /> } />
        <Route  path="/register" element={ <Register /> } />
        <Route  path="/home" element={ <Home /> } />
    
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
