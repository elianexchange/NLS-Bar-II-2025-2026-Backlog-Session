import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardContent } from "./DashboardContent";

export function Dashboard() {
  return (
    <div className="flex h-screen bg-dashboard-main">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <DashboardContent />
      </div>
    </div>
  );
}