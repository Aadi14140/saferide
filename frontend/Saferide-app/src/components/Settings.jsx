import { useState } from "react";

function Settings() {

  const [name, setName] = useState("Ravi");
  const [phone, setPhone] = useState("9876543210");
  const [email, setEmail] = useState("ravi@email.com");
  const [alerts, setAlerts] = useState(true);
  const [delayNotification, setDelayNotification] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSave = () => {
    const data ={
        name,
        phone,
        email,
        alerts,
        delayNotification,
        darkMode
    };
    localStorage.setItem("darkMode", darkMode);
    console.log("Saved Settings:", data);
    alert("Settings Saved Successfully!");
  };

  return (
    <div style={{ padding: "20px", width: "100%" }}>

      <h2>Account Settings</h2>

      <div style={{ marginTop: "20px" }}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ display: "block", padding: "8px", width: "300px", marginBottom: "15px" }}
        />

        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ display: "block", padding: "8px", width: "300px", marginBottom: "15px" }}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: "block", padding: "8px", width: "300px", marginBottom: "20px" }}
        />

        <h3 style={{ marginTop: "30px" }}>Notification Settings</h3>

        <label>
        <input
            type="checkbox"
            checked={alerts}
            onChange={() => setAlerts(!alerts)}
        />
        Bus Arrival Alerts
        </label>

        <br/>

        <label>
        <input
            type="checkbox"
            checked={delayNotification}
            onChange={() => setDelayNotification(!delayNotification)}
        />
        Delay Notifications
        </label>
        <h3 style={{ marginTop: "30px" }}>App Preferences</h3>

        <label>
        <input
            type="checkbox"
            checked={darkMode}
            onChange={(e) => {
            const value = e.target.checked;
            setDarkMode(value);

            if (value) {
                document.body.style.backgroundColor = "#131a1a";
                document.body.style.color = "white";
            } else {
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
            }
            }}
        />
        Enable Dark Mode
        </label>

        <h3 style={{ marginTop: "30px" }}>Security</h3>

        <button
        style={{
            padding: "10px",
            background: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "6px",
            marginTop: "10px"
        }}
        >
        Change Password
        </button>

        <button
          onClick={handleSave}
          style={{
            padding: "10px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px"
          }}
        >
          Save Settings
        </button>
      </div>

    </div>
  );
}

export default Settings;