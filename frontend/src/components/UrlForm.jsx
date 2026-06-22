import { useState } from "react";
import api from "../api/axios";

function UrlForm({ refreshUrls }) {

    const [originalUrl, setOriginalUrl] =
        useState("");

    const [customAlias, setCustomAlias] =
        useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();
        setLoading(true);

        try {

            const token =
                localStorage.getItem("token");

            await api.post(
                "/url/create",
                {
                    originalUrl,
                    customAlias
                },
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

            setOriginalUrl("");
            setCustomAlias("");

            alert("URL created successfully!");
            refreshUrls();

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Error creating URL"
            );

        } finally {
            setLoading(false);
        }

    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: "0 auto", maxWidth: "100%" }}>

            <h3 style={{ marginTop: 0, marginBottom: "1.5rem", textAlign: "center", color: "var(--text-strong)" }}>Create New Short URL</h3>

            <div style={{ marginBottom: "1rem" }}>
                <input
                    type="url"
                    placeholder="https://example.com/very/long/url"
                    value={originalUrl}
                    onChange={(e) =>
                        setOriginalUrl(
                            e.target.value
                        )
                    }
                    required
                    style={{ width: "100%" }}
                />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
                <input
                    type="text"
                    placeholder="Custom Alias (optional)"
                    value={customAlias}
                    onChange={(e) =>
                        setCustomAlias(
                            e.target.value
                        )
                    }
                    style={{ width: "100%" }}
                />
            </div>

            <button type="submit" disabled={loading} style={{ width: "100%" }}>
                {loading ? "Creating..." : "Create Short URL"}
            </button>

        </form>
    );
}

export default UrlForm;