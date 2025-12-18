
import { useState } from "react";
import { validEmail, validPassword,} from "../../utils/validations/signin";
import { loginUser } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../context/authContex";
import { toast } from "react-toastify";



export default function loginComponent() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState(false);

  const {refreshUser} = useAuth();
  const navigate = useNavigate();

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newErrors: { [key: string]: string } = {};

    if (!validEmail(form.email)) {
      newErrors.email = "Invalid Email";
    }
 
    if (!validPassword(form.password)) {
      newErrors.password = "Password must be at least 8 characters and contain letters & numbers";
    }
 
    // ================================== If there are errors, stop submission =======================================
     if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // ================= Clear errors if everything is fine ================================
    setErrors({});
    console.log('form data :',form)
    loginUser(form).then(() => {
      refreshUser();
      toast.success(
          "Successfully Complete"
      )
      navigate("/home");
    }).catch(()=>{
      toast.error(
         "Wrong Password or Email"
      )
    })
  };

  return (
 
<>
      {/* Signup card */}
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6 sm:p-8 md:p-10 lg:p-12 relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 text-center mb-6">
           Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            Create a  new account{" "}
          <a href="/register" className="text-yellow-400 font-semibold hover:underline">
            Register
          </a>
        </p>
      </div>
      

    </>
  );
}
