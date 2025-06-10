import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Gallery from "./Pages/Gallery";
import Footer from "./Components/Footer";
import ContactUs from "./Pages/Contactus";
import TravelBooking from "./Pages/TravelBooking";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/signup" element={<TravelBooking/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
