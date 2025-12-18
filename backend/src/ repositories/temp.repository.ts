import { IBaseRepository } from "./interfaces/base.repo.interface";
import { IsTemp ,TempModel } from "../models/temp.model";
import { IsTempRepo } from "./interfaces/temp.repo.interface";
import { BaseRepository } from "./base.repository";

export class TempRepository extends BaseRepository<IsTemp> implements IsTempRepo{

    constructor(){
        super(TempModel);
    }
};
