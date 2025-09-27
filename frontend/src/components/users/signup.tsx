import { useState } from "react";
import { validEmail, validName, validPassword, validMobile } from "../../utils/validations/signin";
import { registerUser } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { Report } from "notiflix";
import { Eye, EyeOff } from "lucide-react";

interface signupPros{
  onSignupSuccess:()=>void
}


export default function Signup({onSignupSuccess}:signupPros) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newErrors: { [key: string]: string } = {};

    if (!validName(form.name)) {
      newErrors.name = "Invalid Name";
    }
    if (!validEmail(form.email)) {
      newErrors.email = "Invalid Email";
    }
    if (!validMobile(form.mobile)) {
      newErrors.mobile = "Invalid Mobile Number";
    }
    if (!validPassword(form.password)) {
      newErrors.password = "Password must be at least 8 characters and contain letters & numbers";
    }
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // If there are errors, stop submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors if everything is fine
    setErrors({});
    console.log('form data :',form)
    registerUser(form).then(() => {
      onSignupSuccess()
       Report.success(
        "Success",
        "Successfully Complete",
        "Thanks"
       )
      navigate("/otp");
    }).catch((errors)=>{
      Report.failure(
        "Error",
        errors,
        "Close"
      )
    })
  };

  return (
 
<>
      {/* Signup card */}
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6 sm:p-8 md:p-10 lg:p-12 relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 text-center mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-800 font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
              value={form.name}
              onChange={handleChanges}
              required
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-800 font-medium">Email</label>
            <input
              type="text"
              name="email"
              className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
              value={form.email}
              onChange={handleChanges}
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-gray-800 font-medium">Mobile</label>
            <input
              type="text"
              name="mobile"
              className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
              value={form.mobile}
              onChange={handleChanges}
              required
            />
            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-gray-800 font-medium">Password</label>
            <input
              type={showPassword ?"text" :"password"}
              name="password"
              className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
              value={form.password}
              onChange={handleChanges}
              required
            />
            <button type="button" onClick={()=>setShowPassword(!showPassword)} className="absolute right-3 top-9 text-gray-500 hover:text-gray-700">
                      {showPassword ? <Eye size={18}/> :<EyeOff size={18}/>}
            </button>
            
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-gray-800 font-medium">Confirm Password</label>
            
            <input
              type={showConfirmPassword ?"text" :"password"}
              name="confirmPassword"
              className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
              value={form.confirmPassword}
              onChange={handleChanges}
              required
            />
            <button type="button" className="absolute right-3 top-9 text-gray-500 hover:text-gray-700" onClick={()=>setShowConfirmPassword(!showConfirmPassword)}> 
                   {showConfirmPassword ? <Eye size={18}/> :<EyeOff size={18}/>}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition text-sm sm:text-base"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs sm:text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-400 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
      

    </>
  );
}
