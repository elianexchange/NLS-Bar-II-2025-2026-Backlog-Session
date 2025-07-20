import { Card, CardContent, CardHeader } from "@/components/ui/card";
import applicantPassport from "@/assets/applicant-passport.jpg";

export function CheckAdmissionStatusPage() {
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

        <div className="flex gap-8">
          <div className="flex-1">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">Profile</h3>
              </div>

              <div className="text-center mb-8">
                <h4 className="text-sm font-medium text-gray-700 mb-2">COUNCIL OF LEGAL EDUCATION</h4>
                <div className="mb-2">
                  <div className="text-red-600 font-medium">NIGERIAN LAW SCHOOL,</div>
                  <div className="text-red-600 font-medium">BWARI, P.M.B. 170 GARKI, ABUJA NIGERIA.</div>
                </div>
                <div className="w-16 h-16 mx-auto mb-2">
                  <div className="w-full h-full bg-amber-700 rounded-full flex items-center justify-center">
                    <div className="text-white text-xs">SEAL</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">BAR II 2024/2025 POSTING STATUS</div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Matric Number</label>
                  <div className="bg-gray-100 p-2 rounded">LAW/190319</div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Application Number</label>
                  <div className="bg-gray-100 p-2 rounded">AG/2024A/572297</div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">University</label>
                    <div className="bg-gray-100 p-2 rounded text-sm">Benson Idahosa University</div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Surname</label>
                    <div className="bg-gray-100 p-2 rounded text-sm">ORANYELI</div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Othernames</label>
                    <div className="bg-gray-100 p-2 rounded text-sm">DAVID AFAM</div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Admission Status</label>
                    <div className="bg-gray-100 p-2 rounded text-sm">FULL ADMISSION</div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Posting</label>
                  <div className="bg-gray-100 p-2 rounded text-center">Yenegoa</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-64">
            <div className="bg-red-100 p-4 rounded-lg text-center">
              <div className="text-sm text-gray-600 mb-2">Applicant's Passport</div>
              <div className="w-32 h-40 mx-auto rounded overflow-hidden border border-gray-300">
                <img 
                  src={applicantPassport} 
                  alt="Applicant's Passport Photo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}