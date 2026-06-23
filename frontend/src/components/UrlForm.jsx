import { useState } from "react";
import api from "../api/axios";

function UrlForm({ refreshUrls }) {
    const [originalUrl, setOriginalUrl] = useState("");
    const [customAlias, setCustomAlias] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const token = localStorage.getItem("token");

            await api.post(
                "/url/create",
                {
                    originalUrl,
                    customAlias
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
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
        <div className="form-card">
            <h3>Create New Short URL</h3>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="url"
                        placeholder="https://example.com/very/long/url"
                        value={originalUrl}
                        onChange={(e) => setOriginalUrl(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Custom Alias (optional)"
                        value={customAlias}
                        onChange={(e) => setCustomAlias(e.target.value)}
                    />
                </div>

                <div className="form-actions">
                    <button type="submit" disabled={loading}>
                        {loading ? "Creating..." : "Create Short URL"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UrlForm;