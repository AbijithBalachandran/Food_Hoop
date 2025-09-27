import express from 'express';
import jwt from "jsonwebtoken";
import { authenticate } from '../middlewares/auth.middleware';
import { Request, Response } from 'express';


interface AuthRequest extends Request {
  user?: {
    id: string;
  };
}


const authRouter = express.Router();

authRouter.get('/verify', authenticate, (req:AuthRequest, res:Response) => {
    res.json({ success: true, user: req.user })

});

authRouter.get('/refresh', (req, res) => {

    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.status(401).json({ success: false, message: "No refresh token" });
    }

    try {
        const decode = jwt.verify(refreshToken, process.env.JWT_SECRET_REFRESH_TOKEN!) as { id: string }
        const newAccessToken = jwt.sign({ id: decode.id }, process.env.JWT_SECRET_ACCESS_TOKEN!, { expiresIn: "15m" });

        res.cookie("accessToken", newAccessToken, {
            httpOnly: true,
            sameSite: "lax",
            secure: false
        });

        return res.json({ success: true, accessToken: newAccessToken });
    }catch(error){
        console.error(error);
           return res.status(401).json({ success: false, message: "Invalid refresh token" });
    }
    
 });

 export default authRouter;