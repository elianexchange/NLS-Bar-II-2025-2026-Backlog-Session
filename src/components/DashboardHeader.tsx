import { Maximize2, Eye, User, LogOut, UserPen, KeyRound } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import applicantPassport from "@/assets/applicant-passport.jpg";

export function DashboardHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleEditProfile = () => {
    navigate("/dashboard/edit-profile");
    setShowDropdown(false);
  };

  return (
    <header className="h-16 bg-dashboard-header border-b border-gray-200 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-dashboard-text-primary">
          Dashboard <span className="text-dashboard-accent">BAR II</span>
        </h1>
        <button className="p-2 hover:bg-gray-100 rounded-md">
          <Eye className="w-5 h-5 text-dashboard-text-secondary" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-md">
          <Maximize2 className="w-5 h-5 text-dashboard-text-secondary" />
        </button>
      </div>
      
      <div className="flex items-center gap-3 relative">
        <span className="text-dashboard-text-secondary">Hello, </span>
        <span className="text-dashboard-text-primary font-medium">David</span>
        <div 
          className="w-8 h-8 rounded-full overflow-hidden border border-gray-300 cursor-pointer hover:border-gray-400 transition-colors"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <img 
            src={applicantPassport} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {showDropdown && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <div className="py-2">
              <button
                onClick={handleEditProfile}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700"
              >
                <UserPen className="w-4 h-4" />
                Edit Profile
              </button>
              <button
                onClick={() => setShowDropdown(false)}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700"
              >
                <KeyRound className="w-4 h-4" />
                Change Pass
              </button>
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}