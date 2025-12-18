import jwt from 'jsonwebtoken';
export declare class AuthService {
    private _accessToken;
    private _refreshToken;
    generateAccessToken(payload: object): string;
    generateRefreshToken(payload: object): string;
    verifyAccessToken(token: string): string | jwt.JwtPayload;
    verifyRefreshToken(token: string): string | jwt.JwtPayload;
}
//# sourceMappingURL=auth.service.d.ts.map