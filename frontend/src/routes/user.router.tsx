import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Auth from "../pages/auth";
import LoginPage from "../pages/login";
import GuestRouteProtect from "./Guest.route";

 export default function UserRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>

            <Route path="/register" element={<GuestRouteProtect><Auth/></GuestRouteProtect>}/>
            <Route path="/otp" element={<GuestRouteProtect><Auth/></GuestRouteProtect>}/>
            <Route path="/login" element={<GuestRouteProtect><LoginPage/></GuestRouteProtect>}/>


        </Routes>
    )
    
}

