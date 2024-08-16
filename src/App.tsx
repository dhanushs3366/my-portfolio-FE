import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
