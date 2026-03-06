import ParentPortal from "./pages/ParentPortal";

import { Routes, Route } from "react-router-dom";
import ParentLayout from "./components/ParentLayout";
import LiveTracking from "./components/LiveTracking";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<ParentLayout />}>
          <Route index element={<ParentPortal />} />
          <Route path="/tracking" element={<LiveTracking />} />
          <Route path="/history" element={<h1>Trip History</h1>} />
          <Route path="/alerts" element={<h1>Alerts</h1>} />
        </Route>
      </Routes>
    

    
  );
}

export default App;