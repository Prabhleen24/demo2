import BootstrapSection from "./components/BootstrapSection";
import MuiSection from "./components/MuiSection";
import TopNavbar from "./components/TopNavbar";

import "./App.css";

function App() {
  
  return (
    <>
    <TopNavbar />
      {/* Global Header */}
      <div className="text-center py-4 bg-dark text-white shadow-sm">
        <h2>Student Portfolio</h2>
        <p className="mb-0">
          Bootstrap & Material UI
        </p>
      </div>

      {/* Split Layout */}
      <div className="container-fluid mt-4">
        <div className="row g-4">
          <div className="col-md-6">
            <BootstrapSection />
          </div>

          <div className="col-md-6">
            <MuiSection />
          </div>
        </div>
      </div>
    </>
  );
}
<div className="footer mt-4">
  © 2026 Student Portfolio | UI built using Bootstrap & Material UI
</div>

export default App;
