import axios from "axios";
import { Report } from "notiflix";

const API  = 'http://localhost:5000';

export const registerUser = async(data:any)=>{
     try {
     const res = await axios.post(`${API}/register`,data, { withCredentials: true });
     return res.data
     } catch (error) {
          if (axios.isAxiosError(error)&& error.response) {
               Report.failure(
                    "Registration Failed",
                    error.response.data.message,
                    "Close"
               )
          }else{
               Report.failure(
                    "Error",
                    "Something Went to Wrong",
                    "Close"
               )
          }
          throw error;
     }
   
}

export const otpVerification = async(otp:any)=>{
     try {
          const res = await axios.post(`${API}/otp`,{otp}, { withCredentials: true });
          return res.data;
     } catch (error) {
            if (axios.isAxiosError(error)&& error.response) {
               console.log(error.response.data.message);
               Report.failure(
                    "OTP Verification Failed",
                    "Invalid OTP or OTP is Expired",
                    "Close"
               )
          }else{
               Report.failure(
                    "Error",
                    "Something Went to Wrong",
                    "Close"
               )
          }
          throw error;
     }
     
}



export const resendOTP = async()=>{
     try {
          const res = await axios.post(`${API}/resendOTP`,{}, { withCredentials: true });
          return res.data;
     } catch (error) {
            if (axios.isAxiosError(error)&& error.response) {
               console.log(error.response.data.message);
               Report.failure(
                    "Resend Fail",
                     error?.response?.data?.message || "Something went wrong",
                    "Close"
               )
          }else{
               Report.failure(
                    "Error",
                    "Something Went to Wrong",
                    "Close"
               )
          }
          throw error;
     }


}


export const loginUser = async(data:any)=>{
     try {
          const res = await axios.post(`${API}/login`,data, { withCredentials: true });
          return res.data;
     } catch (error) {
            if (axios.isAxiosError(error)&& error.response) {
               console.log(error.response.data.message);
               Report.failure(
                    "Resend Fail",
                     error?.response?.data?.message || "Something went wrong",
                    "Close"
               )
          }else{
               Report.failure(
                    "Error",
                    "Something Went to Wrong",
                    "Close"
               )
          }
          throw error;
     }


}

