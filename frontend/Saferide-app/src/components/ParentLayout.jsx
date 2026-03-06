import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function ParentLayout() {
  return (
    <div style={{ display: "flex" }}>

      
      <Sidebar />

      
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>

    </div>
  );
}

export default ParentLayout;