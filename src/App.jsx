import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";
import OverviewPage from "./pages/OverviewPage";
import EquipmentPage from "./pages/EquipmentPage";
import ReportsPage from "./pages/ReportsPage";

function App() {
  return (
    <div className="flex h-screen bg-[#f2f2f2] text-gray-900 overflow-hidden">
      <Sidebar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />    
        <Route path="/Overview" element={<OverviewPage />} />
        <Route path="/EquipmentStatus" element={<EquipmentPage />} />
        <Route path="/Reports" element={<ReportsPage />} />
         
      </Routes>
    </div>
  );
}

export default App;