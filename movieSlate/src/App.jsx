import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavTabs from "./Components/Tabs";

function App() {
  const [movieInfo, setMovieInfo] = useState([]);
  return (
    <div>
      <NavTabs />
      <Outlet context={{ movieInfo, setMovieInfo }} />
    </div>
  );
}

export default App;
