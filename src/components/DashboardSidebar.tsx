import { Home, FileText, FileCheck, Download, Edit, User, Eye, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  key: string;
}

const sidebarItems: SidebarItem[] = [
  { icon: Home, label: "Dashboard", key: "dashboard" },
  { icon: FileCheck, label: "Check Court Posting", key: "check-court-posting" },
  { icon: FileCheck, label: "Check Chamber Posting", key: "check-chamber-posting" },
  { icon: FileText, label: "Admission Letter", key: "admission-letter" },
  { icon: Download, label: "Download Other Application", key: "download-other-application" },
  { icon: Edit, label: "Apply Here Page 1", key: "apply-here-page-1" },
  { icon: Edit, label: "Apply Page 2", key: "apply-page-2" },
  { icon: CheckCircle, label: "Check Admission Status", key: "check-admission-status" },
  { icon: CheckCircle, label: "Check Posting", key: "check-posting" },
  { icon: Eye, label: "View Print Page 1", key: "view-print-page-1" },
  { icon: Eye, label: "View Print Page 2", key: "view-print-page-2" },
  { icon: Edit, label: "Edit Form - Page 1", key: "edit-form-page-1" },
  { icon: Edit, label: "Edit Form - Page 2", key: "edit-form-page-2" },
  { icon: User, label: "Edit Passport Pic Page 1", key: "edit-passport-pic-page-1" },
  { icon: User, label: "Edit Passport Pic Page 2", key: "edit-passport-pic-page-2" },
];

interface DashboardSidebarProps {
  activeItem: string;
  onItemClick: (key: string) => void;
}

export function DashboardSidebar({ activeItem, onItemClick }: DashboardSidebarProps) {
  return (
    <div className="w-60 h-screen bg-dashboard-sidebar text-dashboard-sidebar-text">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-6">Dashboard BAR II</h2>
        <nav className="space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.key;
            return (
              <button
                key={item.key}
                onClick={() => onItemClick(item.key)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 text-left text-sm rounded-md transition-colors",
                  isActive 
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