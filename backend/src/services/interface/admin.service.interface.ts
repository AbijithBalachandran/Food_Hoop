import { RegisterUserRequestDto } from "../../dto/request/user.request.dto";
import { RegisterUserResponseDto } from "../../dto/response/user.response.dto";


export interface IAdminService {
    registerAdmin(data:RegisterUserRequestDto):Promise<RegisterUserResponseDto>;
}