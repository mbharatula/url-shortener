import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="auth-page">
            <div className="auth-container" style={{ textAlign: "center" }}>
                <h1>URL Shortener</h1>

                <p style={{
                    maxWidth: "700px",
                    marginBottom: "2rem",
                    lineHeight: "1.6"
                }}>
                    A full-stack URL shortening platform built using
                    the MERN stack. Create custom short links,
                    manage your URLs, track click analytics,
                    and organize everything through a simple dashboard.
                </p>

                <div style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    flexWrap: "wrap"
                }}>
                    <Link to="/login">
                        <button>
                            Login
                        </button>
                    </Link>

                    <Link to="/register">
                        <button className="btn-secondary">
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;