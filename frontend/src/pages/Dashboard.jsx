import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";

import UrlForm from "../components/UrlForm";

import UrlTable from "../components/UrlTable";

import StatsCard from "../components/StatsCard";

function Dashboard() {
  const navigate = useNavigate();

  const [urls, setUrls] = useState([]);

  const [stats, setStats] = useState({
    totalUrls: 0,
    totalClicks: 0,
  });

  const fetchData = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");

      const urlsResponse = await api.get("/url/myurls", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUrls(urlsResponse.data);

      const statsResponse = await api.get("/url/stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStats(statsResponse.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const loadData = async () => {
      await fetchData();
    };

    loadData();
  }, [fetchData, navigate]);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Manage and track your shortened URLs</p>
      </div>

      <div className="dashboard-stats">
        <StatsCard totalUrls={stats.totalUrls} totalClicks={stats.totalClicks} />
      </div>

      <UrlForm refreshUrls={fetchData} />
      <UrlTable urls={urls} refreshUrls={fetchData} />
    </div>
  );
}

export default Dashboard;
