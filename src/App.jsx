import { Route, Routes } from "react-router-dom";
import { LogInPage } from "./pages/LoginPage/LogInPage";
import { ForgotPassPage } from "./pages/ForgotPass/ForgotPassPage";
import { ResetPassPage } from "./pages/ResetPass/ResetPassPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/forgot-password" element={<ForgotPassPage />} />
        <Route path="/reset-password" element={<ResetPassPage />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;
