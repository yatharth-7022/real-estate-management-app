import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Profile from "./pages/Profile";
import { About } from "./pages/About";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Header } from "./Components/Header";
import { PrivateRoute } from "./Components/PrivateRoute";
import OAuth from "./Components/OAuth";
import OAuthRedirectHandler from "./Components/OAuthRedirectHandler";
import { CreateListing } from "./pages/CreateListing";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/auth/callback" element={<OAuthRedirectHandler />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
