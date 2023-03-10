import { IsEnum } from "class-validator";

export class CreateClaimDto {
    
    @IsEnum(['COMPLETED','ADDITIONAL_INFO_REQUIRED'], { message: 'Invalid State'})
    claimStatus: 'COMPLETED' | 'ADDITIONAL_INFO_REQUIRED';
    dateSubmitted: string;
    firstName: string;
    lastName: string;
}
