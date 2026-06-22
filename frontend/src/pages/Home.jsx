import { Link } from "react-router-dom";

function Home() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                textAlign: "center",
                padding: "20px"
            }}
        >
            <h1 style={{ marginBottom: "16px" }}>URL Shortener</h1>

            <p
                style={{
                    maxWidth: "700px",
                    marginBottom: "30px",
                    lineHeight: "1.6"
                }}
            >
                A full-stack URL shortening platform built using
                the MERN stack. Create custom short links,
                manage your URLs, track click analytics,
                and organize everything through a simple dashboard.
            </p>

            <div
                style={{
                    display: "flex",
                    gap: "16px",
                    justifyContent: "center",
                    flexWrap: "wrap"
                }}
            >
                <Link to="/login">
                    <button
                        style={{
                            padding: "12px 32px",
                            fontSize: "1rem",
                            fontWeight: "600"
                        }}
                    >
                        Login
                    </button>
                </Link>

                <Link to="/register">
                    <button
                        style={{
                            padding: "12px 32px",
                            fontSize: "1rem",
                            fontWeight: "600"
                        }}
                    >
                        Register
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;