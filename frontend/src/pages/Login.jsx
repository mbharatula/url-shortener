import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        setLoading(true);

        try {

            const response = await api.post(
                "/auth/login",
                formData
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            alert("Login Successful");

            navigate("/dashboard");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Login Failed"
            );

        } finally {
            setLoading(false);
        }

    };

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>

            <div style={{ width: "100%" }}>
                <h1 style={{ marginBottom: "24px", textAlign: "center" }}>Welcome Back</h1>

                <form onSubmit={handleSubmit} style={{ maxWidth: "420px", margin: "0 auto" }}>

                    <div style={{ marginBottom: "12px" }}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ width: "100%" }}
                        />
                    </div>

                    <div style={{ marginBottom: "24px" }}>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={{ width: "100%" }}
                        />
                    </div>

                    <button type="submit" disabled={loading} style={{ width: "100%", marginBottom: "16px" }}>
                        {loading ? "Logging in..." : "Login"}
                    </button>

                    <p style={{ textAlign: "center", fontSize: "0.95rem", marginTop: "16px" }}>
                        Don't have an account? <a href="/register" style={{ color: "var(--accent-strong)", fontWeight: "600" }}>Register here</a>
                    </p>

                </form>
            </div>

        </div>
    );
}

export default Login;