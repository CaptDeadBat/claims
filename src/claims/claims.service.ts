import { Injectable } from '@nestjs/common';
import { CreateClaimDto } from './dto/create-claim.dto';
import { UpdateClaimDto } from './dto/update-claim.dto';

@Injectable()
export class ClaimsService {
    private claims = [
        {  claimNumber:'1', claimStatus: "ADDITIONAL_INFO_REQUIRED", dateSubmitted: "2007-04-26T00:00:00" },
        {  claimNumber:'2', claimStatus: "COMPLETED", dateSubmitted: "2013-04-26T00:00:00"        }
    ];

    getClaims(claimStatus?: 'COMPLETED' | 'ADDITIONAL_INFO_REQUIRED'){
        if(claimStatus){
            return this.claims.filter((claim)=>claim.claimStatus==claimStatus);
        }
        return this.claims;
    }

    getClaim(claimNumber: string){
        const claim = this.claims.find((claim) => claim.claimNumber.localeCompare(claimNumber) == 0);

        if(!claim){
            throw new Error('claim not found!  :<')
        }
        
        return claim;
    }

    createClaim(createClaimDto: CreateClaimDto ){
        const newClaim = {
            ...createClaimDto,
            claimNumber: Date.now().toString(),
        };
        this.claims.push(newClaim);
        return newClaim;

    }

    updateClaim(claimNumber: string, updateClaimDto: UpdateClaimDto){
        this.claims = this.claims.map((claim) => {
            if(claim.claimNumber===claimNumber){
            return { ...claim, ...updateClaimDto};
        }

            return claim;
    });
        return this.getClaim(claimNumber);
    }

    removeClaim(claimNumber: string){
        const toBeRemoved = this.getClaim(claimNumber);
    
        this.claims = this.claims.filter((claim) => claim.claimNumber !== claimNumber);
    
        return toBeRemoved;
    }
}


