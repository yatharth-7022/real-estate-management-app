import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { About } from "./pages/About";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Header } from "./Components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
