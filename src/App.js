import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BedBugExterminator from "./Services/BedBugExterminator";
import { Footer } from "./Components/Footer";
import Nav from "./Components/Nav";
import ScrollToTop from "./Components/ScrollToTop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import MiceRemoval from "./Services/MiceRemoval";
import RatRemoval from "./Services/RatRemoval";
import AntsExterminator from "./Services/AntsExterminator";
import CockroachesExterminator from "./Services/CockroachesExterminator";
import WaspsRemoval from "./Services/WaspsRemoval";
import MosquitoesControl from "./Services/MosquitoesControl";
import SpidersControl from "./Services/SpidersControl";
import CentipedesRemoval from "./Services/CentipedesRemoval";
import RaccoonRemoval from "./Services/RaccoonRemoval";
import SquirrelRemoval from "./Services/SquirrelRemoval";

const App = () => {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mice-control" element={<MiceRemoval />} />
        <Route path="/rat-control" element={<RatRemoval />} />
        <Route path="/bed-bug-exterminator" element={<BedBugExterminator />} />
        <Route path="/ants-exterminator" element={<AntsExterminator />} />
        <Route path="/cockroaches-exterminator" element={<CockroachesExterminator />} />
        <Route path="/wasps-removal" element={<WaspsRemoval />} />
        <Route path="/mosquitoes-control" element={<MosquitoesControl />} />
        <Route path="/spiders-control" element={<SpidersControl />} />
        <Route path="/centipedes-removal" element={<CentipedesRemoval />} />
        <Route path="/raccoon-removal" element={<RaccoonRemoval />} />
        <Route path="/squirrel-removal" element={<SquirrelRemoval />} />
        

        
          </Routes>
        <Footer />

      </Router>
    </>
  );
};

export default App;