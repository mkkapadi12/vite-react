import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import { Logout } from "./pages/Logout";

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Contacts/>
      <Logout/>
    </>
  );
};

export default App;
