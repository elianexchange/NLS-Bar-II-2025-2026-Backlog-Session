import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export function EditFormPage2() {
  const [formData, setFormData] = useState({
    profile: "ORANYELI DAVID AFAM",
    surname: "ORANYELI",
    otherNames: "DAVID AFAM",
    dateOfBirth: "23/08/2006",
    email: "EBIYEGODSWILL9@GMAIL.COM",
    nationality: "Nigerian",
    gender: "MALE",
    stateAndLocalGovt: "bayelsa_kolokuma/opokuma",
    firstCampusOfChoice: "Yenagoa",
    secondCampusOfChoice: "Port Harcourt",
    degreeObtained: "LL.B",
    maritalStatus: "Single",
    title: "MR.",
    homeAddressInNigeria: "NO.1, NEW SURVIVORS' HOSPITAL ROAD IGBOGENE, YENAGOA BAYELSA STATE",
    telephoneNumber: "09069789316",
    stateOfOrigin: "bayelsa_kolokuma/opokuma",
    nameOfNextOfKin: "DR. EBIYE SAWYER",
    addressOfNextOfKin: "NO.1, NEW SURVIVORS' HOSPITAL ROAD IGBOGENE, YENAGOA BAYELSA STATE",
    nextOfKinRelationship: "FATHER",
    phoneNumberOfNextOfKin: "08062885349",
    classOfDegreeObtained: "Third_Class",
    addressOfInstitutionAttended: "",
    nameOfInstitutionAttended2: "",
    degreeObtained2: "",
    period2: "",
    addressOfInstitutionAttended2: "",
    nameOfInstitutionAttended3: "",
    addressOfInstitutionAttended3: "",
    degreeObtained3: "",
    period3: "",
    nameOfInstitutionAttended4: "",
    addressOfInstitutionAttended4: "",
    degreeObtained4: "",
    period4: "",
    headOfLawFaculty: "DR. S.O. EBIENI",
    officeOrPosition: "DEAN",
    addressOfHeadOfLawFaculty: "Off Upper Adebayo Road, GRA, Benin City 300102, Edo",
    nameOfEmployerOrPreviousEmployer: "",
    officeOrPosition2: "",
    addressOfEmployer: "",
    haveYouEverBeenFiredQuestion: "",
    haveYouEverBeenFiredAnswer: "",
    allegationOfMalpracticeQuestion: "",
    allegationOfMalpracticeAnswer: "",
    dishonestyCriminalOffenceQuestion: "",
    dishonestyCriminalOffenceAnswer: "",
    memberOfSecretSocietyQuestion: "",
    memberOfSecretSocietyAnswer: "",
    allegationOfExaminationMalpracticeQuestion: "",
    allegationOfExaminationMalpracticeAnswer: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleUpdate = () => {
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="flex-1 bg-dashboard-main p-6">
      <Card className="bg-dashboard-content shadow-sm">
        <CardHeader className="text-center">
          <div className="flex justify-between items-center">
            <div className="text-left">
              <p className="text-sm text-dashboard-text-secondary">Profile</p>
              <p className="text-blue-600 cursor-pointer">Dashboard</p>
              <p className="text-dashboard-text-secondary">Profile</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded">⟲</button>
              <button className="p-2 hover:bg-gray-100 rounded">⛶</button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="profile">Profile</Label>
              <Input
                id="profile"
                value={formData.profile}
                onChange={(e) => handleInputChange("profile", e.target.value)}
              />
            </div>
            <div></div>
            
            <div>
              <Label htmlFor="surname">Surname</Label>
              <Input
                id="surname"
                value={formData.surname}
                onChange={(e) => handleInputChange("surname", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="otherNames">Other names</Label>
              <Input
                id="otherNames"
                value={formData.otherNames}
                onChange={(e) => handleInputChange("otherNames", e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="dateOfBirth">Date of birth</Label>
              <Input
                id="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="nationality">Nationality</Label>
              <Select value={formData.nationality} onValueChange={(value) => handleInputChange("nationality", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Nigerian">Nigerian</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="gender">Gender</Label>
              <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MALE">MALE</SelectItem>
                  <SelectItem value="FEMALE">FEMALE</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="stateAndLocalGovt">State and Local Govt</Label>
              <Input
                id="stateAndLocalGovt"
                value={formData.stateAndLocalGovt}
                onChange={(e) => handleInputChange("stateAndLocalGovt", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="firstCampusOfChoice">First Campus of Choice</Label>
              <Input
                id="firstCampusOfChoice"
                value={formData.firstCampusOfChoice}
                onChange={(e) => handleInputChange("firstCampusOfChoice", e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="secondCampusOfChoice">Second Campus of Choice</Label>
              <Input
                id="secondCampusOfChoice"
                value={formData.secondCampusOfChoice}
                onChange={(e) => handleInputChange("secondCampusOfChoice", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="degreeObtained">Degree Obtained</Label>
              <Input
                id="degreeObtained"
                value={formData.degreeObtained}
                onChange={(e) => handleInputChange("degreeObtained", e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="maritalStatus">Marital Status</Label>
              <Select value={formData.maritalStatus} onValueChange={(value) => handleInputChange("maritalStatus", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Single">Single</SelectItem>
                  <SelectItem value="Married">Married</SelectItem>
                  <SelectItem value="Divorced">Divorced</SelectItem>
                  <SelectItem value="Widowed">Widowed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
              />
            </div>
            
            <div className="md:col-span-2">
              <Label htmlFor="homeAddressInNigeria">Home Address in Nigeria</Label>
              <Input
                id="homeAddressInNigeria"
                value={formData.homeAddressInNigeria}
                onChange={(e) => handleInputChange("homeAddressInNigeria", e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="telephoneNumber">Your Telephone Number</Label>
              <Input
                id="telephoneNumber"
                value={formData.telephoneNumber}
                onChange={(e) => handleInputChange("telephoneNumber", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="stateOfOrigin">State of Origin / Local Govt</Label>
              <Input
                id="stateOfOrigin"
                value={formData.stateOfOrigin}
                onChange={(e) => handleInputChange("stateOfOrigin", e.target.value)}
              />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-semibold">Next of Kin Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nameOfNextOfKin">Name of Next Of Kin</Label>
                <Input
                  id="nameOfNextOfKin"
                  value={formData.nameOfNextOfKin}
                  onChange={(e) => handleInputChange("nameOfNextOfKin", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="addressOfNextOfKin">Address of Next Of Kin</Label>
                <Input
                  id="addressOfNextOfKin"
                  value={formData.addressOfNextOfKin}
                  onChange={(e) => handleInputChange("addressOfNextOfKin", e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="nextOfKinRelationship">Next Of Kin Relationship</Label>
                <Input
                  id="nextOfKinRelationship"
                  value={formData.nextOfKinRelationship}
                  onChange={(e) => handleInputChange("nextOfKinRelationship", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="phoneNumberOfNextOfKin">Phone number of Next Of Kin</Label>
                <Input
                  id="phoneNumberOfNextOfKin"
                  value={formData.phoneNumberOfNextOfKin}
                  onChange={(e) => handleInputChange("phoneNumberOfNextOfKin", e.target.value)}
                />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-semibold">Educational Background</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="classOfDegreeObtained">Class of Degree Obtained</Label>
                <Select value={formData.classOfDegreeObtained} onValueChange={(value) => handleInputChange("classOfDegreeObtained", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="First_Class">First Class</SelectItem>
                    <SelectItem value="Second_Class_Upper">Second Class Upper</SelectItem>
                    <SelectItem value="Second_Class_Lower">Second Class Lower</SelectItem>
                    <SelectItem value="Third_Class">Third Class</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="addressOfInstitutionAttended">Address of Institution Attended</Label>
                <Input
                  id="addressOfInstitutionAttended"
                  value={formData.addressOfInstitutionAttended}
                  onChange={(e) => handleInputChange("addressOfInstitutionAttended", e.target.value)}
                />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-semibold">Head of Law Faculty</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="headOfLawFaculty">Head / Dean Of Law Faculty</Label>
                <Input
                  id="headOfLawFaculty"
                  value={formData.headOfLawFaculty}
                  onChange={(e) => handleInputChange("headOfLawFaculty", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="officeOrPosition">Office or Position</Label>
                <Input
                  id="officeOrPosition"
                  value={formData.officeOrPosition}
                  onChange={(e) => handleInputChange("officeOrPosition", e.target.value)}
                />
              </div>
              
              <div className="md:col-span-2">
                <Label htmlFor="addressOfHeadOfLawFaculty">Address of Head of Law Faculty</Label>
                <Input
                  id="addressOfHeadOfLawFaculty"
                  value={formData.addressOfHeadOfLawFaculty}
                  onChange={(e) => handleInputChange("addressOfHeadOfLawFaculty", e.target.value)}
                />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-semibold">Declaration Questions</h3>
            
            <div className="space-y-4">
              <div>
                <Label>Have you ever been FIRED or are you being tried for any Criminal Offence? YES/NO If YES, please give details</Label>
                <Textarea
                  value={formData.haveYouEverBeenFiredAnswer}
                  onChange={(e) => handleInputChange("haveYouEverBeenFiredAnswer", e.target.value)}
                  placeholder="Please provide details if applicable"
                />
              </div>
              
              <div>
                <Label>Has there been any allegation of examination malpractice against you during your Course of study at any University?</Label>
                <Textarea
                  value={formData.allegationOfExaminationMalpracticeAnswer}
                  onChange={(e) => handleInputChange("allegationOfExaminationMalpracticeAnswer", e.target.value)}
                  placeholder="Please provide details if applicable"
                />
              </div>
              
              <div>
                <Label>Has there been any allegation of any form of dishonesty against you any where?</Label>
                <Textarea
                  value={formData.dishonestyCriminalOffenceAnswer}
                  onChange={(e) => handleInputChange("dishonestyCriminalOffenceAnswer", e.target.value)}
                  placeholder="Please provide details if applicable"
                />
              </div>
              
              <div>
                <Label>Are you a member of any Secret Society or Cultism against your conviction or any university?</Label>
                <Textarea
                  value={formData.memberOfSecretSocietyAnswer}
                  onChange={(e) => handleInputChange("memberOfSecretSocietyAnswer", e.target.value)}
                  placeholder="Please provide details if applicable"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-start">
            <Button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-600">
              Update
            </Button>
          </div>

          <div className="text-xs text-gray-500 mt-8">
            Copyright © 2022 C.L.E N.L.S BAR II, All rights reserved.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}