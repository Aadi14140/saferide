import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState, useEffect } from "react";

const busIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/3448/3448339.png",
  iconSize: [35, 35]
});

function ChangeView({center}) {
  const map= useMap();
  map.setView(center);
  return null;
}

function BusMap() {
  const [position, setPosition] = useState([17.3850,78.4867]);

  useEffect(()=> {
    const interval = setInterval(()=> {
      setPosition(prev => [
        prev[0] + 0.0005,
        prev[1] + 0.0005
      ]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MapContainer center={position} zoom={13} style={{ height: "300px", width: "100%" }}>
      <ChangeView center={position} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={busIcon}>
        <Popup>School Bus Moving</Popup>
      </Marker>
    </MapContainer>
  );
}

export default BusMap;