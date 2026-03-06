import Sidebar from "./components/Sidebar"

import ParentPortal from "./pages/ParentPortal"


function App() {
  return (
    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{ width: "100%" }}>
        <ParentPortal />

      </div>

    </div>
  )
}

export default App