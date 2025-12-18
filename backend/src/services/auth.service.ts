import jwt from 'jsonwebtoken';
import { accessSecret , refreshSecret } from '../config/config';

export class AuthService{
    
    private _accessToken = accessSecret || 'accessSecret';
    private _refreshToken = refreshSecret || 'refreshSecret';

    generateAccessToken(payload:object){
        return jwt.sign(payload,this._accessToken,{expiresIn:'15m'});
    }

    generateRefreshToken(payload:object){
        return jwt.sign(payload,this._refreshToken,{expiresIn:'7d'});
    }

    verifyAccessToken(token:string){
        return jwt.verify(token,this._accessToken);
    }

    verifyRefreshToken(token:string){
        return jwt.verify(token,this._refreshToken);
    }

}