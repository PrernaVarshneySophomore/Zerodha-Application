import { useEffect, useState } from "react";
import axios from "axios";

const RequireAuth = ({ children }) => {
  const [authorized, setAuthorized] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/auth/verify")
      .then(() => {
        setAuthorized(true);
      })
      .catch(() => {
        window.location.replace("http://localhost:3000/login");
      })
      .finally(() => {
        setChecking(false);
      });
  }, []);

  if (checking) return null;

  return authorized ? children : null;
};

export default RequireAuth;
