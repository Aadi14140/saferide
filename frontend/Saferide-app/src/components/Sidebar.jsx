function Sidebar() {
  return (
    <div style={{
      width: "220px",
      height: "100vh",
      background: "#0f172a",
      color: "white",
      padding: "20px"
    }}>
      
      <h2>SafeRide</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "20px" }}>Dashboard</li>
        <li style={{ marginBottom: "20px" }}>Live Tracking</li>
        <li style={{ marginBottom: "20px" }}>Trip History</li>
        <li style={{ marginBottom: "20px" }}>Alerts</li>
      </ul>

    </div>
  )
}

export default Sidebar;