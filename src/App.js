import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";  // Import Home from the pages folder
import WebsiteBuilder from "./Components/WebsiteBuilder"
import Page2 from "./Components/Page2";  // Import Page2 from the components folder
import Page3 from "./Components/Page3";  // Import Page3 from the components folder
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from "./Pages/Dashboard";
import GrapesHome from "./Components/GrapesHome"

function App() {
  return (
    <div>
      <Router>
      <div className="App">
        <Routes>
          {/* Use element prop to render components */}
          <Route path="/" element={<Home />} />
          <Route path="/WebsiteBuilder" element={<WebsiteBuilder />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/Dashboard" element={<Dashboard/>}></Route>
          <Route path="/GrapesHome" element={<GrapesHome/>}></Route>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;