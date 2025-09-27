import slugify from 'slugify';
import { UserModel } from '../models/userModel';

export const generateSlug = async (name: string):Promise<string>=>{
    
    let baseSlug = slugify(name,{lower:true});
    let slug = baseSlug;
    let count = 1;

    while(await UserModel.exists({slug})){
        slug =`${baseSlug}_${count}`
    }
    return slug;
}