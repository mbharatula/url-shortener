import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";

function VerifyEmail() {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () => {
      try {
        const response = await api.get(
          `/auth/verify/${token}`
        );

        alert(response.data.message);
        navigate("/login");
      } catch (error) {
        console.log(error);
        alert(
          error.response?.data?.message ||
          "Verification failed"
        );
        navigate("/login");
      }
    };

    verify();
  }, [token, navigate]);

  return (
    <div className="auth-page">
      <div className="auth-container" style={{ textAlign: "center" }}>
        <h1>Verifying Email</h1>
        <p>Please wait while we verify your email address...</p>
      </div>
    </div>
  );
}

export default VerifyEmail;