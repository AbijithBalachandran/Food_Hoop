import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContex";
import type{ ReactNode } from "react";


interface GuestRouteProps{
    children:ReactNode;
};

export default function GuestRouteProtect({children}:GuestRouteProps){
    const {user:_user,loading:_loading} = useAuth();

    if (_loading) {
        return <div>Loading....</div>
    }

    if (_user) {
        return <Navigate to={'/home'} replace/>
    }

    return children;
}