import jwt, { JwtPayload }  from "jsonwebtoken";
import { NextFunction, Request, RequestHandler, Response } from 'express';
import  {config} from'../config'
interface AuthenticatedRequest extends Request {
    user?: {
        email: string;
        role: string;
    };
}
export const authenticaUser =(req: AuthenticatedRequest ,  res: Response, next: NextFunction)=>{
    try {
        let token
        const authHeader = req.headers.authorization
        // console.log(authHeader)
        if(authHeader && authHeader.startsWith('Bearer')){
            token = authHeader.split(' ')[1]
            // console.log(token)
        }
        if(!token) return res.status(401).json({msg:"Authentication invalid"})

        const payload = jwt.verify(token, config.jwtSecret) as JwtPayload

        if(typeof payload === 'object'){
            req.user={
                email : payload.email,
                role:payload.role
            }
        }
        next()
    } catch (error) {
        next(error)
    }
}
export const authorizeRole = (...roles: string[]): RequestHandler => {
    return (req: Request | string | any, res: Response, next: NextFunction) => {
      console.log(roles);
    const userRole = req.user.role 
    console.log(userRole)
    if (!roles.includes(userRole)) {
      return res
        .status(403)
        .json({ msg: 'Tidak sah untuk mengakses rute ini' });
    }
    next();
  };
};
