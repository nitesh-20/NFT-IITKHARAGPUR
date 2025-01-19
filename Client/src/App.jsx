import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Upload from "./pages/Upload";
import TradeSphere from "./pages/TradeSphere";
import Miner from "./pages/MoneyMiner";
import BuyToken from "./pages/BuyTokens";
import Contest from "./pages/Contest";
import LeaderBoard from "./pages/LeaderBoard";
import Tron from "./components/Auth/Tron";
import NftView from "./pages/NftExplorer"; 
// import Login from "./components/Auth/Login"; // Uncomment if needed later

const App = () => {
  console.log('App is rendered');
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/TradeSphere" element={<TradeSphere />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/MoneyMiner" element={<Miner />} />
        <Route path="/BuyTokens" element={<BuyToken />} />
        <Route path="/Tron" element={<Tron />} />
        <Route path="/NftView" element={<NftView />} /> {/* NFT viewer page */}
        {/* <Route path="/login" element={<Login />} />  Uncomment if needed */}
      </Routes>
    </Router>
  );
};

export default App;
