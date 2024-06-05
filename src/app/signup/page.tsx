'use client';

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { AuthController } from '@/controllers/AuthController';

const Signup: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await AuthController.register(firstName, lastName, email, password);
      router.push('/welcome');
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await AuthController.loginWithGoogle();
      router.push('/welcome');
    } catch (error) {
      console.error('Google login failed', error);
    }
  };

  const handleGithubSignup = async () => {
    try {
      await AuthController.loginWithGitHub();
      router.push('/welcome');
    } catch (error) {
      console.error('GitHub login failed', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className='border border-black w-[70%] h-[80%] p-10 rounded-xl shadow-lg'>
        <div className="w-[40%] ml-[20%]">
          <h2 className="text-2xl font-bold mb-2 text-center">Hello!</h2>
          <p className="text-center mb-8">Create Your Account</p>
          <div className="space-y-4">
            <TextField
              label="First Name"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              variant="outlined"
              size="small"
            />
            <TextField
              label="Last Name"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              variant="outlined"
              size="small"
            />
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
            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              variant="outlined"
              size="small"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSignup}
            >
              SIGN UP
            </Button>
            <div className="text-center my-4">OR</div>
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
              <Button
                variant="outlined"
                endIcon={<Image src="/image1.svg" alt="Google" width={28} height={28} />}
                onClick={handleGoogleSignup}
                fullWidth
              >
                Sign Up With Google
              </Button>
              <Button
                variant="outlined"
                endIcon={<Image src="/image2.svg" alt="GitHub" width={28} height={28} />}
                onClick={handleGithubSignup}
                fullWidth
              >
                Sign Up With GitHub
              </Button>
            </div>
          </div>
          <p className="text-center mt-4">
            Already have an Account? <a href="/login" className="text-blue-500">LOGIN</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
