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
    <div className="url-table-container">
      <h3>Your URLs</h3>
      {urls.length === 0 ? (
        <div className="table-empty">
          <p>No URLs created yet. Create your first URL above!</p>
        </div>
      ) : (
        <table>
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
                    style={{ fontFamily: "monospace" }}
                  >
                    {url.shortCode}
                  </a>
                </td>

                <td style={{ textAlign: "center", fontWeight: "600" }}>{url.clicks}</td>

                <td style={{ textAlign: "center" }}>
                  <button
                    className="btn-danger"
                    onClick={() => handleDelete(url._id)}
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
