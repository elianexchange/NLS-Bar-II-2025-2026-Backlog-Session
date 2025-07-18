import { Home, FileText, FileCheck, Download, Edit, User, Eye, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
}

const sidebarItems: SidebarItem[] = [
  { icon: Home, label: "Dashboard", isActive: true },
  { icon: FileCheck, label: "Check Court Posting" },
  { icon: FileCheck, label: "Check Chamber Posting" },
  { icon: FileText, label: "Admission Letter" },
  { icon: Download, label: "Download Other Application" },
  { icon: Edit, label: "Apply Here Page 1" },
  { icon: Edit, label: "Apply Page 2" },
  { icon: CheckCircle, label: "Check Admission Status" },
  { icon: CheckCircle, label: "Check Posting" },
  { icon: Eye, label: "View Print Page 1" },
  { icon: Eye, label: "View Print Page 2" },
  { icon: Edit, label: "Edit Form - Page 1" },
  { icon: Edit, label: "Edit Form - Page 2" },
  { icon: User, label: "Edit Passport Pic Page 1" },
  { icon: User, label: "Edit Passport Pic Page 2" },
];

export function DashboardSidebar() {
  return (
    <div className="w-60 h-screen bg-dashboard-sidebar text-dashboard-sidebar-text">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-6">Dashboard BAR II</h2>
        <nav className="space-y-1">
          {sidebarItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 text-left text-sm rounded-md transition-colors",
                  item.isActive 
                    ? "bg-dashboard-sidebar-active text-dashboard-sidebar-text" 
                    : "hover:bg-dashboard-sidebar-hover"
                )}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}