import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from"react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import NewProject from "./components/NewProject";
import AboutUs from "./components/AboutUs";
import HowWeWork from "./components/HowWeWork"
import SupportLinks from "./components/SupportLinks";

function App() {
  return (
    <Router>
    <div>
    <Nav />
    
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/howwework" element={<HowWeWork />} />
      <Route path="/supportlinks" element={<SupportLinks />} />
      <Route path="/project/:id" element={<ProjectPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/newproject" element={<NewProject />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;