import React, { useEffect } from "react";
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
import Location from "./Pages/Location";
import LocationDemo from "./Location/LocationDemo";
import Ajax from "./Location/Ajax";
import Aurora from "./Location/Aurora";
import Bradford from "./Location/Bradford";
import Bowmanville from "./Location/Bowmanville";
import Clarington from "./Location/Clarington";
import Courtice from "./Location/Courtice";
import Durham from "./Location/Durham";
import EastGwillimbury from "./Location/EastGwillimbury";
import Etobicoke from "./Location/Etobicoke";
import EastYork from "./Location/EastYork";
import Georgina from "./Location/Georgina";
import Keswick from "./Location/Keswick";
import KingCity from "./Location/KingCity";
import Maple from "./Location/Maple";
import Markham from "./Location/Markham";
import MountAlbert from "./Location/MountAlbert";

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
          <Route
            path="/bed-bug-exterminator"
            element={<BedBugExterminator />}
          />
          <Route path="/ants-exterminator" element={<AntsExterminator />} />
          <Route
            path="/cockroaches-exterminator"
            element={<CockroachesExterminator />}
          />
          <Route path="/wasps-removal" element={<WaspsRemoval />} />
          <Route path="/mosquitoes-control" element={<MosquitoesControl />} />
          <Route path="/spiders-control" element={<SpidersControl />} />
          <Route path="/centipedes-removal" element={<CentipedesRemoval />} />
          <Route path="/raccoon-removal" element={<RaccoonRemoval />} />
          <Route path="/squirrel-removal" element={<SquirrelRemoval />} />
          <Route path="/location" element={<Location />} />
          <Route path="/location-demo" element={<LocationDemo />} />


          {/* location  */}
          <Route path="/pest-control-in-ajax" element={<Ajax />} />
          <Route path="/pest-control-in-aurora" element={<Aurora />} />
          <Route path="/pest-control-in-bradford" element={<Bradford />} />
          <Route path="/pest-control-in-bowmanville" element={<Bowmanville />} />
          <Route path="/pest-control-in-clarington" element={<Clarington />} />
          <Route path="/pest-control-in-courtice" element={<Courtice />} />
          <Route path="/pest-control-in-durham" element={<Durham />} />
          <Route path="/pest-control-in-east-gwillimbury" element={<EastGwillimbury />} />
          <Route path="/pest-control-in-east-york" element={<EastYork />} />
          <Route path="/pest-control-in-etobicoke" element={<Etobicoke />} />
          <Route path="/pest-control-in-georgina" element={<Georgina />} />
          <Route path="/pest-control-in-keswick" element={<Keswick />} />
          <Route path="/pest-control-in-king-city" element={<KingCity />} />
          <Route path="/pest-control-in-maple" element={<Maple />} />
          <Route path="/pest-control-in-markham" element={<Markham />} />
          <Route path="/pest-control-in-mount-albert" element={<MountAlbert />} />
          
          
           
      
      
          
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
