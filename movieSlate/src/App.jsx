import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavTabs from "./Components/Tabs";

function App() {
  const [favorites, setFavorites] = useState([]);
  return (
    <div>
      <NavTabs />
      <Outlet context={{ favorites, setFavorites }} />
    </div>
  );
}

export default App;
