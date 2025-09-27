import jwt from 'jsonwebtoken';
import { accessSecret , refreshSecret } from '../config/config';

export class AuthService{
    
    private accessToken = accessSecret || 'accessSecret';
    private refreshToken = refreshSecret || 'refreshSecret';

    generateAccessToken(payload:object){
        return jwt.sign(payload,this.accessToken,{expiresIn:'15m'});
    }

    generateRefreshToken(payload:object){
        return jwt.sign(payload,this.refreshToken,{expiresIn:'7d'});
    }

    verifyAccessToken(token:string){
        return jwt.verify(token,this.accessToken);
    }

    verifyRefreshToken(token:string){
        return jwt.verify(token,this.refreshToken);
    }

}