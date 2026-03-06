function ParentPortal() {
  return (
    <div style={{ padding: "20px", width: "100%" }}>

      <h2>Good Morning, Ravi</h2>

      {/* Bus Arrival Card */}
      <div style={{
        background: "#06b6d4",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px"
      }}>
        <h3>Arjun's Bus</h3>
        <h2>Estimated Arrival: 8:00 AM</h2>
        <p>Route A • 3 stops remaining</p>
      </div>

      {/* Stats Cards */}
      <div style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px"
      }}>

        <div style={{
          background: "#22c55e",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "200px"
        }}>
          <h3>Children Onboard</h3>
          <h2>2</h2>
        </div>

        <div style={{
          background: "#3b82f6",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "200px"
        }}>
          <h3>Stops Remaining</h3>
          <h2>3</h2>
        </div>

        <div style={{
          background: "#f59e0b",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "200px"
        }}>
          <h3>Delay</h3>
          <h2>+12 min</h2>
        </div>

      </div>

      {/* Live Tracking Section */}
      <div style={{
        marginTop: "30px",
        background: "#1e293b",
        color: "white",
        padding: "20px",
        borderRadius: "10px"
      }}>
        <h3>Live Bus Location</h3>
        <p>Bus is currently near NH65</p>
      </div>

      {/* Events Section */}
      <div style={{
        marginTop: "20px",
        background: "#f1f5f9",
        padding: "20px",
        borderRadius: "10px"
      }}>
        <h3>Today's Events</h3>

        <p>✔ Arjun boarded – 7:52 AM</p>
        <p>✔ Priya boarded – 7:42 AM</p>

      </div>

    </div>
  );
}

export default ParentPortal;