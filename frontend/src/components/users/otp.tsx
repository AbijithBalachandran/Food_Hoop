import { useState, useRef, useEffect } from "react";
import { otpVerification ,resendOTP } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { Report } from "notiflix";

interface otpProps{
  onOtpSuccess:()=>void;
}

const OtpPage = ({onOtpSuccess}:otpProps) => {

  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [timer , setTimer] = useState(60);
  const navigate = useNavigate();

  useEffect(()=>{
    if (timer > 0) {
      const countdown = setTimeout(()=>{
        setTimer(timer-1);
      },1000);
      return ()=>clearTimeout(countdown);
    }
  },[timer]);

  const handleChanges = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return;

    let newOtp = [...otp];
    newOtp[index] = element.value;

    setOtp(newOtp);

    if (element.value !== "" && index < otp.length - 1) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRef.current[index - 1]?.focus()
    }
  };


  const handleResendOTP = async()=>{
        try {
          setResendLoading(true);
              const res = await resendOTP();
              setTimer(60);
              console.log(res.message);
              Report.success(
                "OTP Sent",
               "A new OTP has been sent to your email.",
               "Close"
              )
        } catch (error:any) {
         if (error.response) {
        Report.failure(
          "Error",
          error.response.data.message,
          "Close"
        )
      } else if (error.request) {
        Report.failure(
          "Server Side",
          " No response from server",
          "Close"
        )
      } else {
        Report.failure(
          "Error",
          error,
          "Close"
        )
      }
        }finally{
          setResendLoading(false);
        }
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalOtp = otp.join('');
    if (finalOtp.length < otp.length) {
     Report.warning(
      "OTP Warning",
      "Please Enter Full OTP.",
      "Got it"
    );
      return;
    }

    try {
      setLoading(true);
      const res = await otpVerification(finalOtp);
      onOtpSuccess();
      Report.success(
        "OTP Verified",
         JSON.stringify(res.message),
         "Success"
      )
      
      navigate('/login')
    } catch (error: any) {
      console.error(error);
      if (error.response) {
        Report.failure(
          "Error",
          error.response.data.message,
          "Close"
        )
      } else if (error.request) {
        Report.failure(
          "Server Side",
          " No response from server",
          "Close"
        )
      } else {
        Report.failure(
          "Error",
          error,
          "Close"
        )
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <>

        <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6 sm:p-8 md:p-10 lg:p-12 relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-6">
            Enter Your OTP
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6">
            <div className="flex space-x-6">
              {
                otp.map((data, index) => (
                  <input key={index} value={data} type="text" maxLength={1}
                    onChange={(e) => handleChanges(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => { inputRef.current[index] = el }}
                    className="w-16 h-16 text-center text-2xl rounded-xl shadow-md bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400" />

                ))
              }
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600">
              {loading ? "Verifing..." : "Verify"}
            </button>

          </form>
            <p className="mt-5"> {timer > 0 ? (
          <span className="text-gray-500 text-sm">
            You can resend OTP in <b>{timer}</b>s
          </span>
        ) : (
          <button
            onClick={handleResendOTP}
            disabled={resendLoading}
            className="underline text-blue-500 rounded-md p-2 text-sm"
          >
            {resendLoading ? "Resending..." : "Resend OTP"}
          </button>
        )}
        </p>
        </div>

    </>
  );
}

export default OtpPage;