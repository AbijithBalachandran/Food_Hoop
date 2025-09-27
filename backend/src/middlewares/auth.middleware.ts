
import { Request , Response , NextFunction } from "express";
import  jwt  from "jsonwebtoken";

interface JwtPayload{
   id:string;
}

interface AuthRequest extends Request {
  user?: {
    id: string;
  };
}


export const authenticate = (req:AuthRequest , res:Response , next:NextFunction)=>{
     
    const token = req.cookies.accessToken;

    if (!token) {
       return res.status(401).json({message:"token not provide.."});
    }
    
    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET_ACCESS_TOKEN!)as JwtPayload;
        req.user = {id:decode.id};
        next(); 
        
    } catch (error) {
        return res.status(403).json({message:'Invalid or expired token'});
    }
}

