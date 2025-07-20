import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { toast } from "sonner";

export function EditProfilePage() {
  const [formData, setFormData] = useState({
    firstName: "ORANYELI",
    lastName: "DAVID AFAM",
    contactNumber: "",
    email: ""
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
    <div className="min-h-screen bg-dashboard-main">
      <div className="flex-1 bg-dashboard-main p-6">
      <Card className="bg-dashboard-content shadow-sm max-w-4xl mx-auto">
        <CardHeader className="border-b">
          <div className="flex justify-between items-center">
            <div className="text-left">
              <h1 className="text-xl font-semibold">Profile</h1>
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
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="contactNumber">Contact Number</Label>
                <Input
                  id="contactNumber"
                  value={formData.contactNumber}
                  onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
            
            <div className="flex justify-start">
              <Button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-600 text-white">
                Update
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}