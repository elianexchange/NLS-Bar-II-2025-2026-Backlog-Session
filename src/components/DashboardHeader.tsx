import { Maximize2, Eye, User } from "lucide-react";

export function DashboardHeader() {
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
      
      <div className="flex items-center gap-3">
        <span className="text-dashboard-text-secondary">Hello, </span>
        <span className="text-dashboard-text-primary font-medium">Godswill</span>
        <div className="w-8 h-8 bg-dashboard-text-primary rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
      </div>
    </header>
  );
}