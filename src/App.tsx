import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Footer from "./pages/footer/Footer";
import Contact from "./pages/contact/Contact";
import Blogs from "./pages/blogs/Blogs";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/signUp/SignUp";
import VerifyEmail from "./pages/auth/verifyEmail/VerifyEmail";
import Congrats from "./pages/auth/congrats/Congrats";
import ForgotPassword from "./pages/auth/forgotPassword/ForgotPassword";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/congrats" element={<Congrats />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
