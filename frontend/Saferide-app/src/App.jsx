<<<<<<< HEAD
/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
=======
import ParentPortal from "./pages/ParentPortal";
import Settings from "./components/Settings";
import { Routes, Route } from "react-router-dom";
import ParentLayout from "./components/ParentLayout";
import LiveTracking from "./components/LiveTracking";
import { useEffect } from "react";
>>>>>>> 1b910b41379ee48fe7c5c1a067898be1a11d962b

function App() {
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");

    if (savedDarkMode === "true") {
      document.body.style.backgroundColor = "#0f172a";
      document.body.style.color = "white";
    } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    }
}, []);

  return (
    
      <Routes>
        <Route path="/" element={<ParentLayout />}>
          <Route index element={<ParentPortal />} />
          <Route path="/tracking" element={<LiveTracking />} />
          <Route path="/history" element={<h1>Trip History</h1>} />
          <Route path="/alerts" element={<h1>Alerts</h1>} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    

    
  );
}

<<<<<<< HEAD
export default App*/

import ParentPortal from "./pages/ParentPortal";

function App() {
  return <ParentPortal/>
}

export default App
=======
export default App;
>>>>>>> 1b910b41379ee48fe7c5c1a067898be1a11d962b
