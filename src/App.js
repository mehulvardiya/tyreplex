import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Services from "./components/Services";
import Deal from "./components/Deal";
import Dealer from "./components/Dealer";
import Tyres from "./components/Tyres";
import Payment from "./components/Payment";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Services/>
        <Deal/>
        <Dealer/>
        <Tyres/>
        <Payment/>
        <Main />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
