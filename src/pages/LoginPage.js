import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage(props) {
  const [login, setLogin] = useState(false);
  const [signupName, setSignupName] = useState(" ");
  const [signupEmail, setSignupEmail] = useState(" ");
  const [signupPssword, setSignupPssword] = useState(" ");

  const [loginEmail, setLoginEmail] = useState(" ");
  const [loginPassword, setLoginPassword] = useState(" ");
  const handleSignup = () => {
    if (signupName == " ") {
      toast.warn("Name field is empty!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (signupEmail == " ") {
      toast.warn("Email field is empty!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (signupPssword == " " || signupPssword.length < 8) {
      toast.warn("Password field is empty or password length less than 8 ", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Sign Up successfully..", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      let signupUser = {
        signupName,
        signupEmail,
        signupPssword,
      };
      localStorage.setItem("signupUser", JSON.stringify(signupUser));
      setLogin(true);
    }
  };
  let signupUserData = JSON.parse(localStorage.getItem('signupUser'));
  const navigate = useNavigate()
  const validateUser = () => {
    let signupUser = JSON.parse(localStorage.getItem("signupUser"));
    if (loginEmail != signupUser.signupEmail) {
      toast.error("Incorrect Email", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (loginPassword != signupUser.signupPssword) {
      toast.error("Incorrect Password", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Log In successfully..", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      let loginName = JSON.parse(localStorage.getItem('signupUser'))
      let loggedInUser = {
        loginName: loginName.signupName,
        loginEmail,
        loginPassword,
      };
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      props.loggedIn(true)
      navigate('/');
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="flex w-full justify-center gap-20 items-center  h-[100vh]">
        <img src="./image/login.png" alt="" className="w-[45vw]" />
        <div className="w-[30%] p-7 shadow-lg flex flex-col gap-5 rounded-2xl">
          <div className="flex">
            <img src="./image/Logo.png" alt="" className="w-56" />
          </div>
          {signupUserData ? (
            <div className="flex flex-col items-center gap-6">
              <div className="w-[65%]">
                <h1 className="text-2xl font-semibold text-blue-400">Log In</h1>
                <p className="text-[12px]">
                  Enter below details and access your dashboard.
                </p>
              </div>
              <div className="mt-5 flex flex-col items-center w-[65%] gap-3">
                <TextField
                  size="small"
                  variant="outlined"
                  label="Email"
                  fullWidth
                  type="email"
                  defaultValue=""
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
                <TextField
                  size="small"
                  variant="outlined"
                  label="Password"
                  fullWidth
                  type="password"
                  defaultValue=""
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <Button variant="contained" onClick={validateUser}>
                  Log In
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6">
              <div className="w-[65%]">
                <h1 className="text-2xl font-semibold text-blue-400">
                  Create Account
                </h1>
                <p className="text-[12px]">
                  Let's get started with creating your account.
                </p>
              </div>
              <div className="mt-5 flex flex-col items-center w-[65%] gap-3">
                <TextField
                  size="small"
                  variant="outlined"
                  label="Name"
                  fullWidth
                  defaultValue=""
                  onChange={(e) => {setSignupName(e.target.value)}}
                />
                <TextField
                  size="small"
                  variant="outlined"
                  label="Email"
                  fullWidth
                  type="email"
                  defaultValue=""
                  onChange={(e) => setSignupEmail(e.target.value)}
                />
                <TextField
                  size="small"
                  variant="outlined"
                  label="Password"
                  fullWidth
                  type="password"
                  defaultValue=""
                  onChange={(e) => setSignupPssword(e.target.value)}
                />
                <Button variant="contained" onClick={handleSignup}>
                  Sign Up
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
