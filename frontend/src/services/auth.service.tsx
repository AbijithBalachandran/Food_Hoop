
import api from '../api/axios_api_calls';
import {handleApiError} from '../api/errorhandling';


export const registerUser = async(data:any)=>{
     try {
     const res = await api.post('/register',data, );
     return res.data
     } catch (error) {
          handleApiError(error, "Registration failed")
     }
   
}

export const otpVerification = async(otp:any)=>{
     try {
          const res = await api.post('/otp',{otp},);
          return res.data;
     } catch (error) {
           handleApiError(error,"Invalid or expired OTP")
     }
     
}



export const resendOTP = async()=>{
     try {
          const res = await api.post('/resendOTP',);
          return res.data;
     } catch (error) {
           handleApiError(error,"Resend Otp Failed");
     }


}


export const loginUser = async(data:any)=>{
     try {
          const res = await api.post('/login',data);
          return res.data;
     } catch (error) {
           handleApiError(error,"Login Failed");
     }


}

