import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";

import UrlForm from
"../components/UrlForm";

import UrlTable from
"../components/UrlTable";

import StatsCard from
"../components/StatsCard";

function Dashboard() {

    const navigate = useNavigate();

    const [urls, setUrls] = useState([]);

    const [stats, setStats] =
        useState({
            totalUrls: 0,
            totalClicks: 0
        });

    const fetchData = useCallback(async () => {

        try {

            const token =
                localStorage.getItem("token");

            const urlsResponse =
                await api.get(
                    "/url/myurls",
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

            setUrls(
                urlsResponse.data
            );

            const statsResponse =
                await api.get(
                    "/url/stats",
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

            setStats(
                statsResponse.data
            );

        } catch (error) {

            console.log(error);

        }

    }, []);

    useEffect(() => {

        const token =
            localStorage.getItem("token");

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
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>

            <div style={{ width: "100%", textAlign: "center" }}>
                <h1 style={{ marginBottom: "8px" }}>Dashboard</h1>
                <p style={{ color: "var(--text-muted)", marginBottom: 0 }}>Manage and track your shortened URLs</p>
            </div>

            <StatsCard
                totalUrls={stats.totalUrls}
                totalClicks={stats.totalClicks}
            />

            <div style={{ width: "100%", maxWidth: "600px" }}>
                <UrlForm
                    refreshUrls={fetchData}
                />
            </div>

            <div style={{ width: "100%" }}>
                <UrlTable
                    urls={urls}
                    refreshUrls={fetchData}
                />
            </div>

        </div>
    );
}

export default Dashboard;