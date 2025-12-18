
import { UserModel,IsUser} from "../models/user.model";
import { BaseRepository } from "./base.repository";
import { IsUserRepo } from "./interfaces/user.repo.interface";


export class UserRepository  extends BaseRepository<IsUser> implements IsUserRepo{


    constructor(){
        super(UserModel);
    }
    
}