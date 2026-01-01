import React, { useState } from "react";
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
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.post(
        "http://localhost:8080/auth/forgot-password",
        { email },
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success(res.data.message || "OTP sent to your email");
      navigate(`/verify-otp/${encodeURIComponent(email)}`);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
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
                Forgot Password
              </h1>
              <p className="text-gray-600">
                Enter your email and we'll send an OTP to reset your password
              </p>

              <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl md:text-3xl text-center text-green-600">
                    Send OTP
                  </CardTitle>
                  <CardDescription className="text-center">
                    We'll send an OTP to your email
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="m@example.com"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                  <Button
                    onClick={handleSubmit}
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-500"
                  >
                    {isLoading ? "Sending OTP..." : "Send OTP"}
                  </Button>

                  <div className="w-full flex justify-center mt-2">
                    <button
                      onClick={() => navigate("/login")}
                      className="text-sm text-green-600 hover:underline"
                    >
                      ← Back to login
                    </button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
