/*export default function Sidebar(){
    return(
        <div style={{
            width:"200px",
            height:"100vh",
            background:"#1e293b",
            color:"white",
            padding:"20px"
        }}>
            <h2>SafeRide</h2>

            <ul style={{listStyle:"none", padding:0}}>
                <li>Dashboard</li>
                <li>Live Tracking</li>
                <li>Trp history</li>
                <li>Alerts</li>
            </ul>
        </div>
    )
}*/

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>SafeRide</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>

        <li style={{ marginBottom: "20px", cursor: "pointer" }}>
          Dashboard
        </li>

        <li style={{ marginBottom: "20px", cursor: "pointer" }}>
          Live Tracking
        </li>

        <li style={{ marginBottom: "20px", cursor: "pointer" }}>
          Trip History
        </li>

        <li style={{ marginBottom: "20px", cursor: "pointer" }}>
          Alerts
        </li>

        <li style={{ marginBottom: "20px", cursor: "pointer" }}>
          My Children
        </li>

        <li style={{ marginBottom: "20px", cursor: "pointer" }}>
          Settings
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;