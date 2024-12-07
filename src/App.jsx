import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import { Logout } from "./pages/Logout";
import Login from "./pages/Login";
import HeroSection from "./pages/HeroSection";

const App = () => {
  return (
    <>
      <Home />
      <Login />
      <About />
      <Contacts/>
      <Logout/>
      <Contacts />
      <HeroSection/>
    </>
  );
};

export default App;
