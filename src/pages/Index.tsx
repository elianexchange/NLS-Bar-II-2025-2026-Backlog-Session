import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dashboard } from "@/components/Dashboard";
import { LoginPage } from "@/components/pages/LoginPage";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  return isAuthenticated ? <Dashboard /> : <LoginPage onLogin={handleLogin} />;
};

export default Index;
