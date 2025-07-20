import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function ViewPrintPage1() {
  return (
    <div className="flex-1 bg-dashboard-main p-6">
      <Card className="bg-white shadow-sm max-w-4xl mx-auto">
        <CardHeader className="text-center border-b">
          <div className="text-center space-y-2">
            <h1 className="text-lg font-bold text-red-600">COUNCIL OF LEGAL EDUCATION</h1>
            <h2 className="text-base font-bold text-red-600">NIGERIAN LAW SCHOOL</h2>
            <h3 className="text-sm font-bold text-red-600">BWARI, P.M.B. 170 GARKI, ABUJA NIGERIA.</h3>
            
            <div className="flex justify-center my-4">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">CLE</span>
              </div>
            </div>
            
            <h2 className="text-base font-bold text-red-600">APPLICATION FOR ADMISSION TO THE 2024/2025 BAR PART II ( Backlog Session) COURSE</h2>
            
            <p className="text-sm text-gray-700 mt-4">
              To be completed by every applicant and returned to the Secretary, Council of Legal Education,
            </p>
            <p className="text-sm text-gray-700">
              Nigerian Law School Headquarters, P.M.B 170 Garki, Abuja
            </p>
            
            <p className="text-xs text-gray-600 mt-2">
              together with two coloured passport size photographs measuring 2ins x 1.5ins (which must bear the applicant's full name and signature),
              not later than Friday, _______, 2024. Failure to complete this form correctly would delay and may adversely affect processing of an application.
              The General information notice must be read carefully and followed when completing this form.
            </p>
            
            <div className="flex justify-end mt-4">
              <div className="text-right">
                <p className="text-sm font-semibold">Applicant's Passport</p>
                <div className="w-24 h-32 border-2 border-gray-300 bg-red-100 flex items-center justify-center mt-2">
                  <div className="w-20 h-28 bg-white border border-gray-400 overflow-hidden">
                    <img 
                      src="/src/assets/applicant-passport.jpg" 
                      alt="Applicant's Passport Photo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="border-b pb-2">
              <h3 className="font-semibold">Matric Number: LAW170174</h3>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">SECONDARY EDUCATION</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><span className="font-semibold">Secondary School Attended:</span> OGU GRAMMAR SCHOOL, OGU</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Town / City in Which Situated:</span> OGU (ATISSA ), YENAGOA BAYELSA STATE</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><span className="font-semibold">From:</span> 2010</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">To:</span> 2016</p>
                  </div>
                </div>
                
                <div>
                  <p><span className="font-semibold">Certificate Obtained:</span> NATIONAL EXAMINATION COUNCIL (NECO)</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Subjects Attempted At The WASC GCE SSCE Certificate</h4>
                  <table className="w-full border-collapse border border-gray-300 mt-2">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 text-left">Subject</th>
                        <th className="border border-gray-300 p-2 text-left">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">Secondary School Subject 1: ENGLISH LANGUAGE</td>
                        <td className="border border-gray-300 p-2">C5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Secondary School Subject 2: MATHEMATICS</td>
                        <td className="border border-gray-300 p-2">C5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Secondary School Subject 3: CIVIC EDUCATION</td>
                        <td className="border border-gray-300 p-2">D7</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Secondary School Subject 4: BIOLOGY</td>
                        <td className="border border-gray-300 p-2">C4</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Secondary School Subject 5: CHRISTIAN RELIGIOUS STUDIES</td>
                        <td className="border border-gray-300 p-2">C6</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Secondary School Subject 6: ECONOMICS</td>
                        <td className="border border-gray-300 p-2">D7</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Secondary School Subject 7: LITERATURE-IN-ENGLISH</td>
                        <td className="border border-gray-300 p-2">C5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Secondary School Subject 8: MARKETING</td>
                        <td className="border border-gray-300 p-2">B3</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Secondary School Subject 9:</td>
                        <td className="border border-gray-300 p-2"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4">
                  <p><span className="font-semibold">Qualification(s) with which entry was gained to study Law in the University</span></p>
                  <p><span className="font-semibold">Qualification:</span> JAMB</p>
                </div>
                
                <div className="mt-4 space-y-2">
                  <p className="text-sm"><span className="font-semibold">NOTE:</span> Attach Photocopies of JAMB Admission Letter and Score Sheet</p>
                  <p className="text-sm"><span className="font-semibold">NOTE:</span> Photocopy of JAMB Admission Letter and Score Sheet MUST be attached. Failure to attach a photocopy of JAMB admission letter will disqualify the applicant.</p>
                  <p className="text-sm"><span className="font-semibold">NOTE:</span> Photocopy of Law degree certificate awarded MUST be attached if already issued. Production of LL.B certificate is a prerequisite for call to the Nigerian Bar.</p>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="font-semibold">Signature of Commissioner of Oaths or Notary Public</p>
                    <div className="border-b border-gray-400 w-full mt-2"></div>
                  </div>
                  
                  <div>
                    <p className="font-semibold">State Name and Address of Commissioner of Oaths</p>
                    <div className="border-b border-gray-400 w-full mt-2"></div>
                    <div className="border-b border-gray-400 w-full mt-2"></div>
                  </div>
                  
                  <div>
                    <p className="font-semibold">Signature of Declarant (Applicant)</p>
                    <div className="border-b border-gray-400 w-full mt-2"></div>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-100 p-4 rounded">
                  <h4 className="font-semibold mb-2">NOTES TO THE APPLICANT</h4>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>Make a photocopy of this form and keep so you will refer to it for your Application Number.</li>
                    <li>Have you attached the photocopy of your certificates as required in the foot-note to paragraph (11) of this form?</li>
                    <li>Have you attached two copies of your recent two passport photographs?</li>
                    <li>The School reserves the right not to process any application which is completed in a manner other than as required.</li>
                  </ol>
                  <p className="text-sm font-semibold mt-2 text-center">Attach the Remita Receipt To This Form.</p>
                  <p className="text-sm font-semibold text-center">Any Form Without The Remita Receipt Will Not be Processed By The Admission Dept</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-xs text-gray-500 mt-8 text-center">
            Copyright © 2022 C.L.E N.L.S BAR II, All rights reserved.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}