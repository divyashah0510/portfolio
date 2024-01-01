import Navbar from "./components/Navbar";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Projects, Contact } from "./pages";
// import { SpeedInsights } from "@vercel/speed-insights/next";

const App = () => {
  return (
    <div className="h-full flex flex-col">
      {/* <SpeedInsights/> */}
      <Router>
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
