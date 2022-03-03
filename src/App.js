import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import MainLayout from "./component/mainLayout";
import PeakAlert from "./pages/peakAlert";
function App() {
  return (
    <Router>
      {/* <MainLayout> */}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/peakAlert" element={<PeakAlert />} />
          <Route exact path="/ventilation" element={<Dashboard />} />
          <Route exact path="/cooling" element={<Dashboard />} />
          <Route exact path="/heatPump" element={<Dashboard />} />
        </Route>
      </Routes>
      {/* </MainLayout> */}
    </Router>
  );
}

export default App;
