import Sidebar from "../components/Sidebar";

export default function ParentPortal() {
    return(
        <div style={{display:"flex"}}>
            <Sidebar />

            <div style={{marginLeft:"20px"}}>
                <h1>Parent Dashboard</h1>
            </div>
            
        </div>
    )
}