import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
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

            await api.post(
                "/auth/register",
                formData
            );

            alert("Registration Successful");

            navigate("/login");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Something went wrong"
            );

        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>

            <div style={{ width: "100%" }}>
                <h1 style={{ marginBottom: "24px", textAlign: "center" }}>Create Account</h1>

                <form onSubmit={handleSubmit} style={{ maxWidth: "420px", margin: "0 auto" }}>

                    <div style={{ marginBottom: "12px" }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{ width: "100%" }}
                        />
                    </div>

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
                        {loading ? "Creating account..." : "Register"}
                    </button>

                    <p style={{ textAlign: "center", fontSize: "0.95rem", marginTop: "16px" }}>
                        Already have an account? <a href="/login" style={{ color: "var(--accent-strong)", fontWeight: "600" }}>Login here</a>
                    </p>

                </form>
            </div>

        </div>
    );
}

export default Register;