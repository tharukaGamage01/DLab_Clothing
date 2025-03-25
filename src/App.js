import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
// import Navbar from "../src/components/Navbar";
// import Footer from "../src/components/~Footer";

function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <div className="min-h-screen">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/About" element={<About />} />
    //       <Route path="/src/pages/Contact" element={<Contact />} />
    //     </Routes>
    //   </div>
    //   <Footer />
    // </Router>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
