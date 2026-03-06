import Sidebar from "./components/Sidebar";
import ParentPortal from "./pages/ParentPortal";

function App() {
  return (
    <div style={{display:"flex"}}>

      <Sidebar />

      <div style={{marginLeft:"20px", width:"100%"}}>
        <ParentPortal />
      </div>

    </div>
  );
}

export default App;