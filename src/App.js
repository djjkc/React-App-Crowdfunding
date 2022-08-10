import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from"react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
    <div>
    <Nav />
    
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/project/:id" element={<ProjectPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;