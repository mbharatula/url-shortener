function StatsCard({ totalUrls, totalClicks }) {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            width: "100%",
            maxWidth: "600px"
        }}>
            <div style={{
                padding: "1.5rem",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                background: "linear-gradient(135deg, rgba(15, 118, 110, 0.08), rgba(245, 158, 11, 0.04))",
                boxShadow: "var(--shadow-soft)",
                textAlign: "center"
            }}>
                <p style={{ margin: "0 0 8px 0", fontSize: "0.95rem", fontWeight: "500", color: "var(--text-muted)" }}>Total URLs</p>
                <h2 style={{ margin: 0, fontSize: "2.5rem", color: "var(--accent-strong)" }}>{totalUrls}</h2>
            </div>

            <div style={{
                padding: "1.5rem",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                background: "linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(15, 118, 110, 0.04))",
                boxShadow: "var(--shadow-soft)",
                textAlign: "center"
            }}>
                <p style={{ margin: "0 0 8px 0", fontSize: "0.95rem", fontWeight: "500", color: "var(--text-muted)" }}>Total Clicks</p>
                <h2 style={{ margin: 0, fontSize: "2.5rem", color: "var(--accent-strong)" }}>{totalClicks}</h2>
            </div>
        </div>
    );
}

export default StatsCard;