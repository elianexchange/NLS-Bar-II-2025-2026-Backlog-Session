import { Card, CardContent, CardHeader } from "@/components/ui/card";
import applicantPassport from "@/assets/applicant-passport.jpg";

export function ViewPrintPage2() {
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
            
            <h2 className="text-base font-bold text-red-600">APPLICATION FOR ADMISSION TO THE 2024/2025 BAR PART II COURSE</h2>
            
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
                      src={applicantPassport} 
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
              <h3 className="font-semibold text-lg mb-4">Personal Data</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><span className="font-semibold">Title:</span> MR.</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Surname:</span> ORANYELI</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><span className="font-semibold">Other Names:</span> GODSWILL NEHIDUPHINI</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Have you ever applied for Admission into the Nigerian Law School? Yes/No:</span> NO</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><span className="font-semibold">If yes, state period:</span> NO</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Present Contact Address :</span></p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><span className="font-semibold">Telephone Number:</span> 09069789316</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Email Address:</span> EBIYEGODSWILL9@GMAIL.COM</p>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 p-2 bg-gray-50 rounded">
                  <p>The School will use this address for all correspondence with you and for notification of change in address as received.</p>
                  <p><span className="font-semibold">Home Town:</span> OGU</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><span className="font-semibold">State / Local Government:</span> bayelsa_kolokuma/opokuma</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Home Address in Nigeria:</span> NO.1, NEW SURVIVORS' HOSPITAL ROAD IGBOGENE, YENAGOA BAYELSA STATE</p>
                  </div>
                </div>
                
                <div>
                  <p><span className="font-semibold">Nationality:</span> Nigerian</p>
                </div>
                
                <div className="text-sm p-2 bg-gray-50 rounded">
                  <p>If a person intends to be born a registrant in representation or instruction, state other reasons for such Nationality before Registration/Examination. NIGERIA</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><span className="font-semibold">Adult photocopy of the Registration / Identification certificate on the next page:</span></p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Date of Birth:</span> 23/08/23</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><span className="font-semibold">Sex:</span> MALE</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Marital Status:</span> Single</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><span className="font-semibold">Next-of-Kin Name:</span> DR. EBIYE SAWYER, RELATIONSHIP: FATHER</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Next-of-Kin Telephone Number:</span> 08062885349</p>
                  </div>
                </div>
                
                <div>
                  <p><span className="font-semibold">Address:</span> NO.1, NEW SURVIVORS' HOSPITAL ROAD IGBOGENE, YENAGOA BAYELSA STATE</p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm">The Nigerian Law School specializes in both degrees of events below.</p>
                  <p className="text-sm">Please indicate the three (3) Campuses of choice in order of preference. Your choice here will</p>
                  <p className="text-sm">be taken into consideration as far as space allows, but we cannot guarantee that your</p>
                  <p className="text-sm">request will be fulfilled.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><span className="font-semibold">First Choice:</span> Yenagoa</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Second Choice:</span> N/A (Blank)</p>
                  </div>
                </div>
                
                <div>
                  <p><span className="font-semibold">Are You Physically Challenged?:</span> No</p>
                </div>
                
                <div>
                  <p><span className="font-semibold">Nature of physical challenge:</span> NO</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><span className="font-semibold">One reason for your choice and which relevant constituent (if any):</span></p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Reason:</span> Default</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><span className="font-semibold">University:</span> Benson Idahosa University</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Degree:</span> LL.B</p>
                  </div>
                </div>
                
                <div>
                  <p><span className="font-semibold">Degree/Class:</span> Third_Class</p>
                </div>
                
                <div className="text-sm p-2 bg-gray-50 rounded">
                  <p>NOTE: ATTACH photocopies of JAMB Admission Letter and Score Sheet</p>
                </div>
                
                <div className="space-y-4">
                  <p><span className="font-semibold">One provision of the out influence on us will not enter times 5 till and 62</span></p>
                  
                  <div>
                    <p><span className="font-semibold">Name Of Head of Law Faculty:</span> DR. S.O. EBIENI</p>
                  </div>
                  
                  <div>
                    <p><span className="font-semibold">Office or Position:</span></p>
                  </div>
                  
                  <div>
                    <p><span className="font-semibold">Address of Head of Law Faculty:</span> Off Upper Adebayo Road, GRA, Benin City 300102, Edo</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold mb-2">SECTION E</h4>
                  <p><span className="font-semibold">DECLARATION BY APPLICANT</span></p>
                  
                  <div className="mt-4 space-y-2">
                    <p className="text-sm">I ORANYELI DAVID AFAM,</p>
                    <p className="text-sm">of NO.1, NEW SURVIVORS' HOSPITAL ROAD IGBOGENE, YENAGOA BAYELSA STATE</p>
                    <p className="text-sm">I hereby solemnly declare as follows:-</p>
                  </div>
                  
                  <div className="mt-4 space-y-2 text-sm">
                    <p>(1) That I am ambitious of being enrolled as a Student of the Nigerian Law School and I am neither called to the Nigerian Bar nor enrolled as a Legal Practitioner</p>
                    <p>(2) That I will observe all my time to my studies and will not include in any gainful or other occupation during the course of study at the Nigerian Law School.</p>
                    <p>(3) That all the information stated in this application are in the interest of the brotherhood and honor and are accurate in every respect.</p>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-sm">Declared this _____ day of _______ 20__</p>
                    <p className="text-sm">Before me</p>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div>
                      <p className="text-sm font-semibold">Signature of Commissioner of Oaths or Notary Public</p>
                      <div className="border-b border-gray-400 w-full mt-2"></div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold">Signature of Declarant (Applicant)</p>
                      <div className="border-b border-gray-400 w-full mt-2"></div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold">State Name and Address of Commissioner of Oaths</p>
                      <div className="border-b border-gray-400 w-full mt-2"></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-100 p-4 rounded">
                  <h4 className="font-semibold mb-2">NOTES TO THE APPLICANT</h4>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>Make a photocopy of this form and keep so you will refer to it for your Application Number.</li>
                    <li>Have you attached the photocopy of your unit Score as required in the foot-note to paragraph (11) of this form?</li>
                    <li>Have you attached two copies of your recent two passport photographs?</li>
                    <li>Have you attached two copies of your recent two passport photographs is it completed in a manner other than as required.</li>
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