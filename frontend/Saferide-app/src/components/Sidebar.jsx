import { FaTachometerAlt, FaBus, FaHistory, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{
      width: "200px",
      height: "100vh",
      background: "#0f172a",
      color: "white",
      padding: "20px"
    }}>

      <h2>SafeRide</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
          

        <li style={{ marginBottom: "20px" }}>
          <NavLink to="/" style={({ isActive })=> ({ display:"flex", alignItems:"center", gap:"10px", color:"white", textDecoration:"none", padding:"10px", borderRadius:"6px", background: isActive ?  "#1e293b": "transparent"})}>
          <FaTachometerAlt />
          Dashboard
          </NavLink>
        </li>

        <li style={{ marginBottom: "20px" }}>
          <NavLink to="/tracking" style={({ isActive })=> ({ display:"flex", alignItems:"center", gap:"10px", color:"white", textDecoration:"none", padding:"10px", borderRadius:"6px", background: isActive ?  "#1e293b": "transparent"})}>
          <FaBus />
          Live Tracking
          </NavLink>
        </li>

        <li style={{ marginBottom: "20px" }}>
          <NavLink to="/history" style={({ isActive })=> ({ display:"flex", alignItems:"center", gap:"10px", color:"white", textDecoration:"none", padding:"10px", borderRadius:"6px", background: isActive ?  "#1e293b": "transparent"})}>
          <FaHistory />
          Trip History
          </NavLink>
        </li>

        <li style={{ marginBottom: "20px" }}>
          <NavLink to="/alerts" style={({ isActive })=> ({ display:"flex", alignItems:"center", gap:"10px", color:"white", textDecoration:"none", padding:"10px", borderRadius:"6px", background: isActive ?  "#1e293b": "transparent"})}>
          <FaBell />
          Alerts
          </NavLink>
        </li>

      

      </ul>

    </div>
  );
}

export default Sidebar;