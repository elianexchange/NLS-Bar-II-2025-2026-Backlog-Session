export function AdmissionLetterPage() {
  return (
    <div className="flex-1 bg-dashboard-main p-6">
      <div className="bg-dashboard-content rounded-lg shadow-sm p-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-dashboard-text-secondary mb-4">
            <span className="text-blue-500">Dashboard</span>
            <span>-</span>
          </div>
          <h2 className="text-xl font-semibold text-dashboard-text-primary">
            Admission Letter
          </h2>
        </div>

        <div className="flex gap-8">
          <div className="flex-1">
            <div className="bg-white rounded-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-sm font-medium text-gray-700 mb-4">COUNCIL OF LEGAL EDUCATION</h3>
                <div className="mb-4">
                  <div className="text-red-600 font-medium">NIGERIAN LAW SCHOOL,</div>
                  <div className="text-red-600 font-medium">BWARI, P.M.B. 170 GARKI, ABUJA NIGERIA.</div>
                </div>
                <div className="w-16 h-16 mx-auto mb-4">
                  <div className="w-full h-full bg-amber-700 rounded-full flex items-center justify-center">
                    <div className="text-white text-xs">SEAL</div>
                  </div>
                </div>
                <div className="text-red-600 font-bold text-lg mb-8">BAR PART II 2024/2025 COURSE</div>
              </div>

              <div className="text-left space-y-4">
                <div className="text-sm">
                  <strong>Matric Number:</strong> LAW/170174
                </div>

                <div className="text-sm space-y-1">
                  <div>c/o Nigerian Law School</div>
                  <div>Bwari-Abuja</div>
                  <div>Nigeria</div>
                  <div><strong>Dear EBIYE GODSWILL INEIBOLUOFINI,</strong></div>
                </div>

                <div className="text-sm space-y-4">
                  <div><strong>OFFER OF ADMISSION YEAR 2024 Backlog - BAR PART II COURSE</strong></div>

                  <div>
                    Further to your application for admission to this institution, I am pleased to inform you that you have 
                    been offered admission to the 2024/2025 academic session of the school.
                  </div>

                  <div>
                    The course will commence on Monday May 27 2024. You have been posted to _Yenegoa
                  </div>

                  <div>
                    Detailed information about the course would be distributed at the point of registration in all the campuses for your compliance.
                  </div>

                  <div><strong>CONDITIONS TO BE FULFILLED DURING REGISTRATION</strong></div>

                  <div>
                    The following conditions must be complied with before students proceed with manual registration on campus of posting.
                  </div>

                  <div className="ml-4 space-y-1">
                    <div>A. Production of Admission Letter</div>
                    <div>B. Production of original and photocopy of on-line registration slip</div>
                    <div>C. Last University's identity card, alternatively International Passport, Driving License or National Identity Card.</div>
                  </div>

                  <div>This is for the purpose of proper identification of the student admitted.</div>
                  <div>We look forward to welcoming you to the School.</div>

                  <div className="mt-8">
                    <div>Yours faithfully,</div>
                    <div className="mt-4 mb-2">
                      <div className="text-2xl font-script">Signature</div>
                    </div>
                    <div className="text-sm">Ag. Secretary To Council/Director of Admin</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-64">
            <div className="bg-red-100 p-4 rounded-lg text-center mb-4">
              <div className="text-sm text-gray-600 mb-2">Applicant's Passport</div>
              <div className="w-32 h-40 bg-red-200 mx-auto rounded flex items-center justify-center">
                <div className="text-gray-500 text-xs">Passport Photo</div>
              </div>
            </div>
            <div className="text-right text-sm text-gray-600">
              <div>Our Ref No.: CLE/ST/BII/AG/2024A/572297</div>
              <div className="mt-4">Date: 2025-07-18</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}