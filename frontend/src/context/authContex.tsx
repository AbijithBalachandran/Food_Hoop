import { createContext , useContext , useEffect ,useState } from "react";
import type { ReactNode } from "react";
import api from "../api/axios_api_calls";

interface AuthContextType{
    user:any,
    loading:boolean,
    refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType |null>(null);

export const AuthProvider =({children}:{children:ReactNode})=>{
    const [user,setUser] = useState<any>(null);
    const [loading ,setLoading] = useState(true);


   const refreshUser =async()=>{
       try {
         const res = await api.get("/auth/verify",{withCredentials:true});

         if (res.data.success) {
            setUser(res.data.user);
         }else{
            setUser(null);
         }
 
       } catch (error:any) {

        if (error.response && error.response?.status === 401) {
      try {
        const refreshRes = await api.get("/auth/refresh", {
          withCredentials: true,
        });

        if (refreshRes.data.success) {
          const verifyRes = await api.get("/auth/verify", {
            withCredentials: true,
          });

          if (verifyRes.data.success) {
            setUser(verifyRes.data.user);
            return;
          }
        }
      } catch (refreshError) {
        console.error("Refresh failed", refreshError);
      }

    }
         setUser(null);
       }finally{
          setLoading(false)
       }
   }


   
    useEffect(()=>{
      const checkAuth = async () => {
    try {
      await refreshUser();
    } catch (err) {
      console.error("Auth check failed:", err);
    }
  };
  checkAuth();
    },[]);

    return(
        <AuthContext.Provider value={{user,loading,refreshUser}}>
           {children}
        </AuthContext.Provider>
    )
};

export const useAuth=()=>{
    const context = useContext(AuthContext);

    if (!context) {
         throw new Error("useAuth must be used within AuthProvider");
    }

    return context;

}


