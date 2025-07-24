import favicon from '/favicon.ico';

const pdfs = [
  { label: 'Download Medical Form', file: '/src/assets/MedicalForm2024.pdf' },
  { label: 'Download Form B', file: '/src/assets/FormB.pdf' },
  { label: 'Download Form B1', file: '/src/assets/FormB1.pdf' },
  { label: 'Download Form B2', file: '/src/assets/FormB2.pdf' },
  { label: 'Download Form A1 Section C', file: '/src/assets/FormA1SectionC.pdf' },
  { label: 'Download Form A1 Section D', file: '/src/assets/FormALastSection.pdf' },
];

export function DownloadOtherApplicationPage() {
  return (
    <div className="flex-1 bg-dashboard-main p-6">
      <div className="bg-dashboard-content rounded-lg shadow-sm p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-xl font-semibold text-dashboard-text-primary">
              Forms To Be Downloaded
            </h2>
          </div>
          <div className="text-dashboard-accent">
            <span>Dashboard -</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-dashboard-text-primary">
              COUNCIL OF LEGAL EDUCATION
            </h3>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-dashboard-text-orange">
                NIGERIAN LAW SCHOOL
              </h4>
              <p className="text-sm font-medium text-dashboard-text-orange">
                BWARI, P.M.B. 170 GARKI, ABUJA NIGERIA.
              </p>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <img 
              src={favicon} 
              alt="Nigerian Law School Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Course Title */}
          <h5 className="text-sm font-medium text-dashboard-text-primary max-w-2xl mx-auto">
            APPLICATION FOR ADMISSION TO THE 2025/2026 background Session BAR PART II COURSE
          </h5>

          {/* Instructions */}
          <div className="space-y-4 text-sm text-dashboard-text-primary max-w-4xl mx-auto">
            <p className="leading-relaxed">
              The General information notice must be read carefully and followed when completing this form.
            </p>
            <p className="leading-relaxed">
              FORM A1 pages 1 and 2 are not available for download, they MUST be filled on line and printed. 
              Attach Forms A1 Section C and D. A completed copy must be sent to the SDA, Nigeria Law School 
              Abuja through the Dean of Law Faculty
            </p>
            <p className="leading-relaxed">
              These forms should be downloaded only after you have completed the on line application
            </p>
          </div>

          {/* Download Links */}
          <div className="space-y-3 pt-4">
            {pdfs.map((pdf, idx) => (
              <div key={idx}>
                <a
                  href={pdf.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="text-dashboard-accent hover:underline font-medium"
                >
                  {pdf.label}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-center text-xs text-dashboard-text-secondary">
            Copyright © 2022 CLE NLS BAR II, All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}