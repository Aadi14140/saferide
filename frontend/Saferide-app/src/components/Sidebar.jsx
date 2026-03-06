export default function Sidebar(){
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
}