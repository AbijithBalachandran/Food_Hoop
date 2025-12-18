import { RegisterUserRequestDto } from "../../dto/request/user.request.dto";
import { RegisterUserResponseDto } from "../../dto/response/user.response.dto";


export interface IVendorService {
    registerVendor(data:RegisterUserRequestDto):Promise<RegisterUserResponseDto>;
}