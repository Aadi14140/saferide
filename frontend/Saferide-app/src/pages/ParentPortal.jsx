import BusMap from "../components/BusMap";

function ParentPortal() {

  const cardStyle = {
    background:"#1e293b",
    color: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
    transition: "transform 0.2s"
  };

  const hoverEffect = {
    onMouseEnter: (e) => e.currentTarget.style.transform = "scale(1.05)",
    onMouseLeave: (e) => e.currentTarget.style.transform = "scale(1)"
  };

  return (
    <div style={{ padding: "20px", width: "100%" }}>

      <h2>Good Morning, Ravi</h2>

      {/* Bus Arrival Card */}
      <div style={{
        background: "#06b6d4",
        color: "white",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "20px",
        boxShadow: "0 6px 12px rgba(0,0,0,0.2)"
      }}>
        <h3>Arjun's Bus</h3>
        <h2>Estimated Arrival: 8:00 AM</h2>
        <p>Route A • 3 stops remaining</p>
      </div>

      {/* Dashboard Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>

        <div
          style={{ ...cardStyle, background: "#22c55e" }}
          {...hoverEffect}
        >
          <h3>Children Onboard</h3>
          <h2>2</h2>
        </div>

        <div
          style={{ ...cardStyle, background: "#3b82f6" }}
          {...hoverEffect}
        >
          <h3>Stops Remaining</h3>
          <h2>3</h2>
        </div>

        <div
          style={{ ...cardStyle, background: "#f59e0b" }}
          {...hoverEffect}
        >
          <h3>Delay</h3>
          <h2>+12 min</h2>
        </div>

      </div>

      {/* Bottom Section */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "20px",
        marginTop: "30px"
      }}>

        {/* Live Tracking */}
        <div style={{
          background: "#1e293b",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 6px 12px rgba(0,0,0,0.2)"
        }}>
          <h3>Live Bus Location</h3>
          <BusMap />
        </div>

        {/* Events */}
        <div style={{
          background: "#334155",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 6px 12px rgba(0,0,0,0.2)"
        }}>
          <h3>Today's Events</h3>
          <p>✔ Arjun boarded – 7:52 AM</p>
          <p>✔ Priya boarded – 7:42 AM</p>
        </div>

      </div>

    </div>
  );
}

export default ParentPortal;