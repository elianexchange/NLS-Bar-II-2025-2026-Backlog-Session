import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export function EditPassportPicPage2() {
  const [formData, setFormData] = useState({
    surname: "ORANYELI",
    otherNames: "",
    gender: "",
    dob: "27-May"
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpdate = () => {
    toast.success("Passport photo and profile updated successfully!");
  };

  return (
    <div className="flex-1 bg-dashboard-main p-6">
      <Card className="bg-dashboard-content shadow-sm max-w-4xl mx-auto">
        <CardHeader className="border-b">
          <div className="flex justify-between items-center">
            <div className="text-left">
              <h1 className="text-xl font-semibold">Passport photo change</h1>
              <div className="flex items-center gap-2 text-sm text-dashboard-text-secondary">
                <span className="text-blue-600 cursor-pointer">Dashboard</span>
                <span>-</span>
                <span>Profile</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded">⟲</button>
              <button className="p-2 hover:bg-gray-100 rounded">⛶</button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Profile</h2>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded">⟲</button>
                <button className="p-2 hover:bg-gray-100 rounded">⛶</button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="surname">Surname</Label>
                  <Input
                    id="surname"
                    value={formData.surname}
                    onChange={(e) => handleInputChange("surname", e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="otherNames">Othernames</Label>
                  <Input
                    id="otherNames"
                    value={formData.otherNames}
                    onChange={(e) => handleInputChange("otherNames", e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="MALE">MALE</SelectItem>
                      <SelectItem value="FEMALE">FEMALE</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="dob">DOB</Label>
                  <Input
                    id="dob"
                    value={formData.dob}
                    onChange={(e) => handleInputChange("dob", e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="applicantsPic">Applicants Pic</Label>
                  <div className="mt-2">
                    <input
                      type="file"
                      id="applicantsPic"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {selectedFile ? selectedFile.name : "No file chosen"}
                    </p>
                  </div>
                </div>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="w-32 h-40 mx-auto bg-gray-100 rounded border flex items-center justify-center">
                    {selectedFile ? (
                      <img 
                        src={URL.createObjectURL(selectedFile)} 
                        alt="Preview" 
                        className="w-full h-full object-cover rounded"
                      />
                    ) : (
                      <span className="text-gray-400 text-sm">Passport Photo Preview</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-start">
              <Button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-600 text-white">
                Update
              </Button>
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