import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AppWrapper from "./components/AppWrapper";
import Loginpage from "./pages/login";
import Dashboard from "./components/features/dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Loginpage />} />
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
