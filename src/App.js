import "./styles/main.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useState, useEffect } from 'react';

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";

import RepairComputers from "./pages/RepairComputers";
import RepairImac from "./pages/RepairImac";
import RepairPhone from "./pages/RepairPhone";
import RepairMackbook from "./pages/RepairMackbook";
import RepairSmartPhone from "./pages/RepairSmartPhone";
import RepairIphone from "./pages/RepairIphone";
import AboutUs from "./pages/AboutUs";
import LanguagePrompt from "./components/languagePrompt/LanguagePrompt";
import RepairSmartWhatch from "./pages/RepairSmartWhatch";


import ScrollToTop from "./utils/scrollToTop"

function App() {
	const [showLanguagePrompt, setShowLanguagePrompt] = useState(false);

	useEffect(() => {
		const selectedLanguage = localStorage.getItem('selectedLanguage');
		if (!selectedLanguage) {
		  setShowLanguagePrompt(true);
		}
	  }, []);
	


  return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/repair_computer" element={<RepairComputers/>} />
					<Route path="/repair_imac" element={<RepairImac/>} />
					<Route path="/repair_phone" element={<RepairPhone/>} />
					<Route path="/repair_mack" element={<RepairMackbook/>} />
					<Route path="/repair_iphone" element={<RepairIphone/>} />
					<Route path="/repair_smartphones" element={<RepairSmartPhone/>} />
					<Route path="/repair_smartwhatch" element={< RepairSmartWhatch />} />
					<Route path="/about" element={<AboutUs />} />
				</Routes>
				<Footer />
			</Router>
			{showLanguagePrompt && <LanguagePrompt onClose={() => setShowLanguagePrompt(false)} />}
		</div>
  );
}

export default App;
