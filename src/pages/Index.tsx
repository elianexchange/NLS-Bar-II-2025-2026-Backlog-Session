import { useState } from "react";
import { Dashboard } from "@/components/Dashboard";
import { LoginPage } from "@/components/pages/LoginPage";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return isAuthenticated ? <Dashboard /> : <LoginPage onLogin={handleLogin} />;
};

export default Index;
