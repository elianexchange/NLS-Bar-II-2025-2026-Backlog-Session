import { useState } from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardPage } from "./pages/DashboardPage";
import { CheckCourtPostingPage } from "./pages/CheckCourtPostingPage";
import { CheckChamberPostingPage } from "./pages/CheckChamberPostingPage";
import { AdmissionLetterPage } from "./pages/AdmissionLetterPage";
import { DownloadOtherApplicationPage } from "./pages/DownloadOtherApplicationPage";
import { ApplyHerePage1 } from "./pages/ApplyHerePage1";
import { ApplyPage2 } from "./pages/ApplyPage2";
import { CheckAdmissionStatusPage } from "./pages/CheckAdmissionStatusPage";
import { CheckPostingPage } from "./pages/CheckPostingPage";
import { ViewPrintPage1 } from "./pages/ViewPrintPage1";
import { ViewPrintPage2 } from "./pages/ViewPrintPage2";
import { EditFormPage1 } from "./pages/EditFormPage1";
import { EditFormPage2 } from "./pages/EditFormPage2";
import { EditPassportPicPage1 } from "./pages/EditPassportPicPage1";
import { EditPassportPicPage2 } from "./pages/EditPassportPicPage2";

export function Dashboard() {
  const [activeItem, setActiveItem] = useState("dashboard");

  const renderContent = () => {
    switch (activeItem) {
      case "dashboard":
        return <DashboardPage />;
      case "check-court-posting":
        return <CheckCourtPostingPage />;
      case "check-chamber-posting":
        return <CheckChamberPostingPage />;
      case "admission-letter":
        return <AdmissionLetterPage />;
      case "download-other-application":
        return <DownloadOtherApplicationPage />;
      case "apply-here-page-1":
        return <ApplyHerePage1 />;
      case "apply-page-2":
        return <ApplyPage2 />;
      case "check-admission-status":
        return <CheckAdmissionStatusPage />;
      case "check-posting":
        return <CheckPostingPage />;
      case "view-print-page-1":
        return <ViewPrintPage1 />;
      case "view-print-page-2":
        return <ViewPrintPage2 />;
      case "edit-form-page-1":
        return <EditFormPage1 />;
      case "edit-form-page-2":
        return <EditFormPage2 />;
      case "edit-passport-pic-page-1":
        return <EditPassportPicPage1 />;
      case "edit-passport-pic-page-2":
        return <EditPassportPicPage2 />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex h-screen bg-dashboard-main">
      <DashboardSidebar 
        activeItem={activeItem} 
        onItemClick={setActiveItem} 
      />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        {renderContent()}
      </div>
    </div>
  );
}