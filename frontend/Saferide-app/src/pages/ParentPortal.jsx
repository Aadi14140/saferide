/*export default function ParentPortal() {
    return(
        <div>
            <h1>SafeRide Parent Portal</h1>
            <p>Welcome to the parent dashboard</p>
        </div>
    )
}*/

function ParentPortal() {
  return (
    <div style={{ padding: "20px" }}>

      <h1>Parent Dashboard</h1>

      <div style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px"
      }}>

        <div style={{
          background: "#3b82f6",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "200px"
        }}>
          <h3>Children Onboard</h3>
          <p>2 Students</p>
        </div>

        <div style={{
          background: "#10b981",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "200px"
        }}>
          <h3>Stops Remaining</h3>
          <p>3 Stops</p>
        </div>

        <div style={{
          background: "#f59e0b",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "200px"
        }}>
          <h3>Delay</h3>
          <p>+12 Minutes</p>
        </div>

      </div>

    </div>
  );
}

export default ParentPortal;