import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyEmail from "./pages/verifyEmail";
import ResetPassword from "./pages/ResetPassword";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route
                  path="/"
                  element={<Home/>}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />
                <Route
                    path="/forgot-password"
                    element={<ForgotPassword/>}
                />
                <Route
                    path="/reset-password/:token"
                    element={<ResetPassword />}
                />
                <Route
                    path="/verify/:token"
                    element={<VerifyEmail />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;