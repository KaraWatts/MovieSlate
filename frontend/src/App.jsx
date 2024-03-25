import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavTabs from "./Components/Tabs";

function App() {
  const [rankings, setRankings] = useState([]);
  return (
    <div>
      <NavTabs />
      <Outlet context={{rankings, setRankings}} />
    </div>
  );
}

export default App;
