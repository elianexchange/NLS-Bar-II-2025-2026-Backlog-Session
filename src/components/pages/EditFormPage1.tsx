import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export function EditFormPage1() {
  const [formData, setFormData] = useState({
    profile: "ORANYELI DAVID AFAM",
    secondarySchool: "FAITH ACADEMY DAY SECONDARY SCHOOL",
    secondarySchoolLocation: "KUBWA, F.C.T, ABUJA",
    secondarySchoolFrom: "2013",
    secondarySchoolTo: "2019",
    secondarySchoolSubject9: "C6",
    secondarySchoolSubject9Grade: "COMPUTER STUDIES",
    secondarySchoolSubject8: "PAINTING AND DECORATING",
    secondarySchoolSubject8Grade: "B3",
    secondarySchoolSubject7: "LITERATURE-IN-ENGLISH",
    secondarySchoolSubject7Grade: "C5",
    secondarySchoolSubject6: "GOVERNMENT",
    secondarySchoolSubject6Grade: "C4",
    secondarySchoolSubject5: "CHRISTIAN RELIGIOUS STUDIES",
    secondarySchoolSubject5Grade: "C6",
    secondarySchoolSubject4: "GEOGRAPHY",
    secondarySchoolSubject4Grade: "C6",
    secondarySchoolSubject3: "CIVIC EDUCATION",
    secondarySchoolSubject3Grade: "C5",
    secondarySchoolSubject2: "MATHEMATICS",
    secondarySchoolSubject2Grade: "C4",
    secondarySchoolSubject1: "ENGLISH LANGUAGE",
    secondarySchoolSubject1Grade: "C4",
    qualification: "JAMB",
    certificateObtained: "NATIONAL EXAMINATION COUNCIL (NECO)"
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
              <Label htmlFor="secondarySchool">Secondary School</Label>
              <Input
                id="secondarySchool"
                value={formData.secondarySchool}
                onChange={(e) => handleInputChange("secondarySchool", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="secondarySchoolLocation">Secondary School Location</Label>
              <Input
                id="secondarySchoolLocation"
                value={formData.secondarySchoolLocation}
                onChange={(e) => handleInputChange("secondarySchoolLocation", e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="secondarySchoolFrom">Secondary School From</Label>
              <Input
                id="secondarySchoolFrom"
                value={formData.secondarySchoolFrom}
                onChange={(e) => handleInputChange("secondarySchoolFrom", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="secondarySchoolTo">Secondary_School_To</Label>
              <Input
                id="secondarySchoolTo"
                value={formData.secondarySchoolTo}
                onChange={(e) => handleInputChange("secondarySchoolTo", e.target.value)}
              />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-semibold">Secondary School Subjects</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label>Secondary School Subject 9</Label>
                <Input
                  value={formData.secondarySchoolSubject9}
                  onChange={(e) => handleInputChange("secondarySchoolSubject9", e.target.value)}
                />
              </div>
              <div>
                <Label>Secondary School Subject 9 Grade</Label>
                <Input
                  value={formData.secondarySchoolSubject9Grade}
                  onChange={(e) => handleInputChange("secondarySchoolSubject9Grade", e.target.value)}
                />
              </div>
              <div>
                <Label>Secondary School Subject 8</Label>
                <Input
                  value={formData.secondarySchoolSubject8}
                  onChange={(e) => handleInputChange("secondarySchoolSubject8", e.target.value)}
                />
              </div>
              
              <div>
                <Label>Secondary School Subject 8 Grade</Label>
                <Input
                  value={formData.secondarySchoolSubject8Grade}
                  onChange={(e) => handleInputChange("secondarySchoolSubject8Grade", e.target.value)}
                />
              </div>
              <div>
                <Label>Secondary School Subject 7</Label>
                <Input
                  value={formData.secondarySchoolSubject7}
                  onChange={(e) => handleInputChange("secondarySchoolSubject7", e.target.value)}
                />
              </div>
              <div>
                <Label>Secondary School Subject 7 Grade</Label>
                <Input
                  value={formData.secondarySchoolSubject7Grade}
                  onChange={(e) => handleInputChange("secondarySchoolSubject7Grade", e.target.value)}
                />
              </div>
              
              <div>
                <Label>Secondary School Subject 6</Label>
                <Input
                  value={formData.secondarySchoolSubject6}
                  onChange={(e) => handleInputChange("secondarySchoolSubject6", e.target.value)}
                />
              </div>
              <div>
                <Label>Secondary School Subject 6 Grade</Label>
                <Input
                  value={formData.secondarySchoolSubject6Grade}
                  onChange={(e) => handleInputChange("secondarySchoolSubject6Grade", e.target.value)}
                />
              </div>
              <div>
                <Label>Secondary School Subject 5</Label>
                <Input
                  value={formData.secondarySchoolSubject5}
                  onChange={(e) => handleInputChange("secondarySchoolSubject5", e.target.value)}
                />
              </div>
              
              <div>
                <Label>Secondary School Subject 5 Grade</Label>
                <Input
                  value={formData.secondarySchoolSubject5Grade}
                  onChange={(e) => handleInputChange("secondarySchoolSubject5Grade", e.target.value)}
                />
              </div>
              <div>
                <Label>Secondary School Subject 4</Label>
                <Input
                  value={formData.secondarySchoolSubject4}
                  onChange={(e) => handleInputChange("secondarySchoolSubject4", e.target.value)}
                />
              </div>
              <div>
                <Label>Secondary School Subject 4 Grade</Label>
                <Input
                  value={formData.secondarySchoolSubject4Grade}
                  onChange={(e) => handleInputChange("secondarySchoolSubject4Grade", e.target.value)}
                />
              </div>
              
              <div>
                <Label>Secondary School Subject 3</Label>
                <Input
                  value={formData.secondarySchoolSubject3}
                  onChange={(e) => handleInputChange("secondarySchoolSubject3", e.target.value)}
                />
              </div>
              <div>
                <Label>Secondary School Subject 3 Grade</Label>
                <Input
                  value={formData.secondarySchoolSubject3Grade}
                  onChange={(e) => handleInputChange("secondarySchoolSubject3Grade", e.target.value)}
                />
              </div>
              <div>
                <Label>Secondary School Subject 2</Label>
                <Input
                  value={formData.secondarySchoolSubject2}
                  onChange={(e) => handleInputChange("secondarySchoolSubject2", e.target.value)}
                />
              </div>

              <div>
                <Label>Secondary School Subject 2 Grade</Label>
                <Input
                  value={formData.secondarySchoolSubject2Grade}
                  onChange={(e) => handleInputChange("secondarySchoolSubject2Grade", e.target.value)}
                />
              </div>
              <div>
                <Label>Secondary School Subject 1</Label>
                <Input
                  value={formData.secondarySchoolSubject1}
                  onChange={(e) => handleInputChange("secondarySchoolSubject1", e.target.value)}
                />
              </div>
              
              <div>
                <Label>Secondary School Subject 1 Grade</Label>
                <Input
                  value={formData.secondarySchoolSubject1Grade}
                  onChange={(e) => handleInputChange("secondarySchoolSubject1Grade", e.target.value)}
                />
              </div>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="qualification">Qualification used for entry into the Law Program</Label>
              <Input
                id="qualification"
                value={formData.qualification}
                onChange={(e) => handleInputChange("qualification", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="certificateObtained">Certificate Obtained After Secondary School Education</Label>
              <Input
                id="certificateObtained"
                value={formData.certificateObtained}
                onChange={(e) => handleInputChange("certificateObtained", e.target.value)}
              />
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