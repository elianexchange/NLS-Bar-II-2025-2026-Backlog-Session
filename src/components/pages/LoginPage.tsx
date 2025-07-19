import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, Lock } from "lucide-react";

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [matNumber, setMatNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate login delay
    setTimeout(() => {
      if (matNumber === "Law/190319" && password === "password1") {
        onLogin();
      } else {
        setError("Your Name is not in the list of Eligible Applicants yet, Contact Your University");
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900">
      {/* Header */}
      <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
        <h1 className="text-white text-lg font-medium">
          BAR PART II 2024/2025 Backlog Session | User login
        </h1>
        <ArrowLeft className="text-white w-6 h-6" />
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              BAR II 2024 2025 Backlog Session
            </h2>
            <h3 className="text-lg text-gray-600">User Login</h3>
          </div>

          <div className="mb-6">
            <div className="text-center text-gray-500 text-sm mb-6">
              Login
            </div>
            
            {error && (
              <div className="text-red-500 text-center text-sm mb-4 px-4 py-2 bg-red-50 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Matric Number in Your University"
                  value={matNumber}
                  onChange={(e) => setMatNumber(e.target.value)}
                  className="pl-10 h-12 bg-gray-50"
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="password"
                  placeholder="Enter password given by the Dean"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12 bg-gray-50"
                  required
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  className="flex-1 h-12 bg-blue-500 hover:bg-blue-600 text-white"
                  disabled={isLoading}
                >
                  <Lock className="w-4 h-4 mr-2" />
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  className="flex-1 h-12"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  .
                </Button>
              </div>

              <div className="text-center pt-4">
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-600 text-sm"
                >
                  Want To Reset Password?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 px-6 py-4 text-center">
        <p className="text-gray-400 text-sm">
          Copyright © 2024 NLS ADMISSION 2024, All rights reserved.
        </p>
      </div>
    </div>
  );
}