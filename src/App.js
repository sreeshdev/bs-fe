import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import MainLayout from "./component/mainLayout";
import PeakAlert from "./pages/peakAlert";
import Ventilation from "./pages/ventilation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <Router>
        {/* <MainLayout> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route element={<MainLayout />}>
            <Route
              exact
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              exact
              path="/peakAlert"
              element={
                <RequireAuth>
                  <PeakAlert />
                </RequireAuth>
              }
            />
            <Route
              exact
              path="/ventilation"
              element={
                <RequireAuth>
                  <Ventilation />
                </RequireAuth>
              }
            />
            <Route
              exact
              path="/cooling"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              exact
              path="/heatPump"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
        {/* </MainLayout> */}
      </Router>
    </>
  );
}

export default App;

function RequireAuth({ children }) {
  console.log(localStorage.getItem("token"));
  const authed = localStorage.getItem("token");

  return authed ? children : <Navigate to="/" replace />;
}
