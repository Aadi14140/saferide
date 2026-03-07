import ParentPortal from "./pages/ParentPortal";
import Settings from "./components/Settings";
import { Routes, Route } from "react-router-dom";
import ParentLayout from "./components/ParentLayout";
import LiveTracking from "./components/LiveTracking";
import { useEffect } from "react";

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

export default App;