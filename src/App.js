import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";  // Import Home from the pages folder
import Page1 from "./Components/Page1";  // Import Page1 from the components folder
import Page2 from "./Components/Page2";  // Import Page2 from the components folder
import Page3 from "./Components/Page3";  // Import Page3 from the components folder


function App() {
  return (
    <div>
      <Router>
      <div className="App">
        <Routes>
          {/* Use element prop to render components */}
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;