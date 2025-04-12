import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./comman/navbar/Navbar";
import Footer from "./comman/footer/Footer";
import Home from "./pages/clonePages/Home"
import SupportPage from "./pages/clonePages/Support"

const App = () => {

  return (
    <ChakraProvider>
        <Router>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<SupportPage />} />
          </Routes>
          <Footer/>
        </Router>
      
    </ChakraProvider>
  );
};

export default App;
