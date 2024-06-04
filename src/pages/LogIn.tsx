"use client";

import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    // Add your login logic here
    // On success, redirect to another page
    router.push("/dashboard");
  };

  const handleGoogleLogin = async () => {
    // Add your Google login logic here
  };

  const handleGithubLogin = async () => {
    // Add your GitHub login logic here
  };

  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="border border-black w-[70%]  h-[70%] rounded-xl shadow-lg  relative">
        <div className="w-[40%] mt-[4%] ml-[20%]">
          <div className="absolute bottom-0 right-0">
            <Image src="/vector.svg" alt="Wave" width={500} height={150} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2 text-center">
              Welcome Arya Soni!
            </h2>
            <p className="text-center mb-8">Login To Your Account</p>
            <div className="space-y-4 mt-[18%]">
              <TextField
                label="Email-Id"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                size="small"
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                size="small"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleLogin}
              >
                LOGIN
              </Button>
              <div className="text-center my-4">OR</div>
              <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
                <Button
                  variant="outlined"
                  startIcon={
                    <Image
                      src="/image1.svg"
                      alt="Google"
                      width={28}
                      height={28}
                    />
                  }
                  onClick={handleGoogleLogin}
                  fullWidth
                >
                  Login With Google
                </Button>
                <Button
                  variant="outlined"
                  startIcon={
                    <Image
                      src="/image2.svg"
                      alt="GitHub"
                      width={28}
                      height={28}
                    />
                  }
                  onClick={handleGithubLogin}
                  fullWidth
                >
                  Login With GitHub
                </Button>
              </div>
            </div>
            <p className="text-center mt-4">
              Don't have an Account?{" "}
              <a href="/signup" className="text-blue-500">
                SIGN UP
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
