import LoginComponent from "../components/users/login"

const LoginPage = ()=>{

 
   
    return (
        <div className="flex items-center justify-center min-h-screen overflow-hidden bg-white p-4">
      <div
        className="absolute inset-0 bg-yellow-400"
        style={{ clipPath: "ellipse(80% 60% at 100% 0%)" }}
      ></div>

     <LoginComponent/>
      
    </div>
    )
}

export default LoginPage