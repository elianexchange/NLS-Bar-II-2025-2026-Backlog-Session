export function CheckPostingPage() {
  return (
    <div className="flex-1 bg-dashboard-main p-6">
      <div className="bg-dashboard-content rounded-lg shadow-sm p-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-dashboard-text-secondary mb-4">
            <span className="text-blue-500">Dashboard</span>
            <span>-</span>
            <span>Profile</span>
          </div>
          <h2 className="text-xl font-semibold text-dashboard-text-primary">
            Profile
          </h2>
        </div>

        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">Profile</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Matric Number</label>
              <div className="bg-gray-100 p-3 rounded">LAW/170174</div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Remarks</label>
              <div className="bg-gray-100 p-3 rounded text-sm">
                You are required to complete Section D of your Application form (office or position, Employment, post held and submit to your Campus of posting with your name and
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">University</label>
                <div className="bg-gray-100 p-3 rounded text-sm">Benson Idahosa University</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Surname</label>
                <div className="bg-gray-100 p-3 rounded text-sm">EBIYE</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Othernames</label>
                <div className="bg-gray-100 p-3 rounded text-sm">GODSWILL INEIBOLUOFINI</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Admission Status</label>
                <div className="bg-gray-100 p-3 rounded text-sm">FULL ADMISSION</div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Application Number</label>
              <div className="bg-gray-100 p-3 rounded text-center">AG/2024A/572297</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}