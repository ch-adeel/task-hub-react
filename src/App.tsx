import "./App.css";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import AppWrapper from "./components/AppWrapper";
import Loginpage from "./pages/login";
import Dashboard from "./components/features/dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Loginpage />}></Route>
          <Route
            path="/dashboard"
            element={
              <AppWrapper>
                <Dashboard />
              </AppWrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
