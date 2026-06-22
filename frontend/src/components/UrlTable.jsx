import api from "../api/axios";

function UrlTable({ urls, refreshUrls }) {
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this URL?")) {
      try {
        const token = localStorage.getItem("token");

        await api.delete(`/url/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        alert("URL deleted successfully!");
        refreshUrls();
      } catch (error) {
        alert("Error deleting URL");
        console.log(error);
      }
    }
  };

  return (
    <div style={{ width: "100%", overflow: "auto" }}>
      <h3 style={{ marginTop: 0, marginBottom: "1.5rem", textAlign: "center", color: "var(--text-strong)" }}>Your URLs</h3>
      {urls.length === 0 ? (
        <div style={{ textAlign: "center", padding: "2rem", color: "var(--text-muted)" }}>
          <p>No URLs created yet. Create your first URL above!</p>
        </div>
      ) : (
        <table border="1" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Original URL</th>
              <th>Short Code</th>
              <th>Clicks</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {urls.map((url) => (
              <tr key={url._id}>
                <td style={{ maxWidth: "250px", wordBreak: "break-word" }}>
                  <a
                    href={url.originalUrl}
                    target="_blank"
                    rel="noreferrer"
                    title={url.originalUrl}
                  >
                    {url.originalUrl.length > 50
                      ? url.originalUrl.substring(0, 50) + "..."
                      : url.originalUrl}
                  </a>
                </td>

                <td>
                  <a
                    href={`${import.meta.env.VITE_BACKEND_URL}/${url.shortCode}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: "0.9rem", fontFamily: "monospace" }}
                  >
                    {url.shortCode}
                  </a>
                </td>

                <td style={{ textAlign: "center", fontWeight: "600" }}>{url.clicks}</td>

                <td style={{ textAlign: "center" }}>
                  <button
                    onClick={() => handleDelete(url._id)}
                    style={{
                      minHeight: "2rem",
                      padding: "0.5rem 1rem",
                      fontSize: "0.9rem",
                      background: "linear-gradient(135deg, #ef4444, #dc2626)",
                      color: "#ffffff"
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UrlTable;
