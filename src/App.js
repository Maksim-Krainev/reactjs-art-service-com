import "./styles/main.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";

import RepairComputers from "./pages/RepairComputers";
import RepairPhone from "./pages/RepairPhone";
import RepairSmartPhone from "./pages/RepairSmartPhone";


// import Project from "./pages/Project";
// import AboutUs from "./pages/AboutUs";


import ScrollToTop from "./utils/scrollToTop"

function App() {
  return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/repair_computer" element={<RepairComputers/>} />
					<Route path="/repair_phone" element={<RepairPhone/>} />
					<Route path="/repair_smartphones" element={<RepairSmartPhone/>} />
				</Routes>
				<Footer />
			</Router>
		</div>
  );
}

export default App;
