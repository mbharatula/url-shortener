function StatsCard({ totalUrls, totalClicks }) {
    return (
        <>
            <div className="stat-card">
                <p className="stat-label">Total URLs</p>
                <h2 className="stat-value">{totalUrls}</h2>
            </div>
            <div className="stat-card">
                <p className="stat-label">Total Clicks</p>
                <h2 className="stat-value">{totalClicks}</h2>
            </div>
        </>
    );
}

export default StatsCard;