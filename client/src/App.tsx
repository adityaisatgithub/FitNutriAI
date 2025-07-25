import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
