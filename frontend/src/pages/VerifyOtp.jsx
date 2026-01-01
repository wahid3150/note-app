import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { toast } from "sonner";

const VerifyOtp = () => {
  const { email } = useParams();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);

  useEffect(() => {
    if (resendTimer <= 0) return;
    const id = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [resendTimer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.post(
        `http://localhost:8080/auth/verify-otp/${encodeURIComponent(email)}`,
        { otp },
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success(res.data.message || "OTP verified");
      navigate(`/change-password/${encodeURIComponent(email)}`);
    } catch (error) {
      const data = error.response?.data;
      const message =
        data?.message ||
        (Array.isArray(data?.errors) ? data.errors.join(", ") : data?.error) ||
        error.message ||
        "Invalid OTP";
      console.error("Verify OTP error:", error);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    if (resendTimer > 0) return;
    try {
      setIsResending(true);
      const decodedEmail = decodeURIComponent(email);
      const res = await axios.post(
        "http://localhost:8080/auth/forgot-password",
        { email: decodedEmail },
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success(res.data.message || "OTP sent successfully");
      setResendTimer(60);
    } catch (error) {
      const data = error.response?.data;
      const message =
        data?.message ||
        (Array.isArray(data?.errors) ? data.errors.join(", ") : data?.error) ||
        error.message ||
        "Something went wrong";
      console.error("Resend OTP error:", error);
      toast.error(message);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="relative w-full h-screen md:h-190 bg-green-100 overflow-hidden">
      <div className="min-h-screen flex flex-col to-muted/20">
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold tracking-tight text-green-600">
                Verify OTP
              </h1>
              <p className="text-gray-600">Enter the OTP sent to your email</p>
              <Card className="w-full max-w-sm">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center text-green-600">
                    Verify
                  </CardTitle>
                  <CardDescription className="text-center">
                    Enter the 6-digit OTP
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="otp">OTP</Label>
                      <Input
                        id="otp"
                        name="otp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={6}
                        className="text-center"
                        placeholder="123456"
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
                    {isLoading ? "Verifying..." : "Verify OTP"}
                  </Button>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
                    <Button
                      variant="ghost"
                      onClick={handleResend}
                      disabled={isResending || resendTimer > 0}
                      className="text-green-600 hover:underline"
                      aria-disabled={isResending || resendTimer > 0}
                    >
                      {isResending ? "Resending..." : "Resend OTP"}
                    </Button>
                    {resendTimer > 0 && (
                      <span className="text-gray-600 mt-1 sm:mt-0">
                        Resend available in {resendTimer}s
                      </span>
                    )}
                  </div>

                  <div className="text-center mt-2">
                    <Button
                      variant="link"
                      onClick={() => navigate("/login")}
                      className="text-green-600 font-medium hover:underline"
                      aria-label="Login with password"
                    >
                      Login with password
                    </Button>
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

export default VerifyOtp;
