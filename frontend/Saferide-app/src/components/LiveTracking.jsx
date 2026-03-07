import BusMap from "./BusMap";

function LiveTracking() {
    return (
        <div style={{ padding:"20px", width:"100%"}}>
            <h2>Live Bus Tracking</h2>
            <div style={{
                background:"#1e293b",
                padding:"20px",
                borderRadius:"10px",
                marginTop:"20px",
            }}>
                <BusMap />
            </div>
        </div>
    )
}

export default LiveTracking;