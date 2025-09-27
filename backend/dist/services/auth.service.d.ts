import jwt from 'jsonwebtoken';
export declare class AuthService {
    private accessToken;
    private refreshToken;
    generateAccessToken(payload: object): string;
    generateRefreshToken(payload: object): string;
    verifyAccessToken(token: string): string | jwt.JwtPayload;
    verifyRefreshToken(token: string): string | jwt.JwtPayload;
}
//# sourceMappingURL=auth.service.d.ts.map