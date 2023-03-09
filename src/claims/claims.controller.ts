import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { ClaimsService } from './claims.service';
import { CreateClaimDto } from './dto/create-claim.dto';
import { UpdateClaimDto } from './dto/update-claim.dto';

@Controller('claims')
export class ClaimsController {

    constructor(private readonly claimsService: ClaimsService){

    }

//GET /claims -->[]
@Get()
getClaims(@Query('status') status: 'COMPLETED' | 'ADDITIONAL_INFO_REQUIRED'){
    return this.claimsService.getClaims(status);
}

//GET /claims/:id -->{...}
@Get(':claimNumber')
getOneClaim(@Param('claimNumber') claimNumber: string){
    try{
        
    return this.claimsService.getClaim(claimNumber);

    }catch(err){

        throw new NotFoundException();
    }
    
}

//POST /claims
@Post()
createClaim(@Body(new ValidationPipe()) createClaimDto: CreateClaimDto){
    return this.claimsService.createClaim(createClaimDto);
}

//PUT /claims/:id -->{...}
@Put(':claimNumber')
updateClaim(@Param('claimNumber') claimNumber: string, @Body() updateClaimDto: UpdateClaimDto){
    return this.claimsService.updateClaim(claimNumber, updateClaimDto);
}

//DELETE /claims/:id 
@Delete(':claimNumber')
removeClaim(@Param('claimNumber') claimNumber: string){

    
    return this.claimsService.removeClaim(claimNumber);
}

@Get()
getUserClaims(@Query('userId') userId: string){
    return this.claimsService.getUserClaims(userId);
}


}

