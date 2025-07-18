export function DashboardPage() {
  return (
    <div className="flex-1 bg-dashboard-main p-6">
      <div className="bg-dashboard-content rounded-lg shadow-sm p-8">
        {/* Welcome Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-dashboard-text-primary mb-6">
            <span className="text-red-500">Welcome Back :</span> Godswill
          </h2>
          
          {/* Application Status */}
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-dashboard-text-secondary mb-4 text-center">
              Your Application has been received download relevant forms and submit with completed form A2
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-500 h-3 rounded-full w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}