import { IsOtp, OTP } from "../models/otp.model";
import { IsTemp, TempModel } from "../models/temp.model";
import { UserModel,IsUser} from "../models/userModel";


export class UserRepository {

    // finding the existing user ---------------

    async findExistingEmail(email:string):Promise<IsUser| null>{
        return UserModel.findOne({email});
    }

    // finding main in the temp user ----------------

    async findEmail(email:string):Promise<IsTemp| null>{
        return TempModel.findOne({email});
    }

    // creating temp user -----------------

    async createTemp(userData:Partial<IsTemp>):Promise<IsUser>{
        const user = new TempModel(userData);
        return await user.save();
    }

    // otp managemnet -----------------------------
   
    async findOtp(email:string):Promise<IsOtp|null>{
        return OTP.findOne({email}).sort({createdAt:-1})
    }

    async deleteOtp(email:string){
        await OTP.deleteMany({email})
    }
    
    async deleteTempUser(email:string){
        await TempModel.deleteOne({email});
    }

    // creating original user in the actual user model after the successfull otp verification -------------------

    async createOrg(userData:Partial<IsTemp>):Promise<IsUser>{
        const user = new UserModel(userData);
        return user.save();
    }

    // user login stages ---------------------------------------

    async loginFindEmail(email:string):Promise<IsUser | null>{
        return UserModel.findOne({email});
    }

    


}