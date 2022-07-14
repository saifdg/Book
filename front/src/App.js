import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";

import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route    path="/login" element={
       <Login />

        } />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
