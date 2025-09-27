
import   mongoose,{ Document, Schema } from "mongoose";


export interface IsTemp extends Document{
    resturentName:string,
    licenceNumber:string,
    city:string,
    name:string,
    slug:string,
    email:string,
    mobile:string,
    password:string,
    role:'admin'|'vendor'|'user'|'delivery';
    createdAt?:Date,
    updatedAt?:Date
}


const TempSchema : Schema<IsTemp> = new mongoose.Schema(
    
    {
       resturentName:{
            type:String,
            required:function(){
               return this.role === 'vendor'
            }
        },
        licenceNumber:{
            type:String,
             required:function(){
               return this.role === 'vendor'
            }
        }, city:{
            type:String,
             required:function(){
               return this.role === 'delivery'
            }
        },
       name:{
        type:String,
        required:true
       },
       slug:{
        type:String,
        required:true
       },
       email:{
          type:String,
          required:true,
          unique:true,
       },
       mobile:{
        type:String,
        required:true,
       },
       password:{
        type:String,
        required:true
       },
       role:{
         type:String,
         enum:["admin","vendor","user","delivery"],
         required:true,
         default:"user"
       },
       createdAt: { type: Date, default: Date.now, expires: 300 } 
    });


    export const TempModel = mongoose.model<IsTemp>("Temp",TempSchema);


