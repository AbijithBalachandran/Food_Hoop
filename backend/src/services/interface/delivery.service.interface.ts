import { RegisterUserRequestDto } from "../../dto/request/user.request.dto";
import { RegisterUserResponseDto } from "../../dto/response/user.response.dto";


export interface IDeliveryService {
    registerDelivery(data:RegisterUserRequestDto):Promise<RegisterUserResponseDto>;
}