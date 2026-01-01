import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

const ChangePassword = () => {
  const { email } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.post(
        `http://localhost:8080/auth/change-password/${encodeURIComponent(
          email
        )}`,
        { newPassword, confirmPassword },
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success(res.data.message || "Password changed successfully");
      navigate("/login");
    } catch (error) {
      const data = error.response?.data;
      const message =
        data?.message ||
        (Array.isArray(data?.errors) ? data.errors.join(", ") : data?.error) ||
        error.message ||
        "Something went wrong";
      console.error("Change password error:", error);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-green-100 overflow-hidden">
      <div className="min-h-screen flex flex-col to-muted/20">
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-green-600">
                Change Password
              </h1>
              <p className="text-gray-600">Enter your new password</p>
              <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl md:text-3xl text-center text-green-600">
                    Change Password
                  </CardTitle>
                  <CardDescription className="text-center">
                    Choose a secure new password
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <div className="relative">
                        <Input
                          id="newPassword"
                          name="newPassword"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          type={showNewPassword ? "text" : "password"}
                          required
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          disabled={isLoading}
                        >
                          {showNewPassword ? (
                            <EyeOff className="w-4 h-4 text-gray-600" />
                          ) : (
                            <Eye className="w-4 h-4 text-gray-600" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          type={showConfirmPassword ? "text" : "password"}
                          required
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          disabled={isLoading}
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-4 h-4 text-gray-600" />
                          ) : (
                            <Eye className="w-4 h-4 text-gray-600" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                  <Button
                    onClick={handleSubmit}
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-500"
                  >
                    {isLoading ? "Updating..." : "Change Password"}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
