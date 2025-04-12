import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./comman/navbar/Navbar";
import AlbumSee from "./frontUi/pages/albumCreation/TestingGet";

import Footer from "./comman/footer/Footer";
import SupportPage from "./frontUi/pages/albumCreation/Support";

const App = () => {

  return (
    <ChakraProvider>
        <Router>
          <Navbar />
          <Routes>
          <Route path="/album-see" element={<AlbumSee />} />
          <Route path="/support" element={<SupportPage />} />
          </Routes>
          <Footer/>
        </Router>
      
    </ChakraProvider>
  );
};

export default App;
