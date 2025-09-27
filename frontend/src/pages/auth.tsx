
// import React from "react";
import { useState } from "react";
import Signup from "../components/users/signup";
import OtpPage from "../components/users/otp";

type Step = "signup"|"otp"|"login"

const AuthenticationPage = ()=>{

  const [step,setStep] = useState<Step>("signup")
   
    return (
        <div className="flex items-center justify-center min-h-screen overflow-hidden bg-white p-4">
      <div
        className="absolute inset-0 bg-yellow-400"
        style={{ clipPath: "ellipse(80% 60% at 100% 0%)" }}
      ></div>


    {
      step === "signup" && (
        <Signup onSignupSuccess={()=>setStep("otp")}/>
      )}

      {
        step === "otp" && (
            <OtpPage onOtpSuccess={()=>setStep("login")}/> 
        )
      }
      
    </div>
    )
}

export default AuthenticationPage