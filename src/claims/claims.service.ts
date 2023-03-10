import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { CreateClaimDto } from './dto/create-claim.dto';
import { UpdateClaimDto } from './dto/update-claim.dto';

@Injectable()
export class ClaimsService {
    private claims = [
        {  claimNumber:'1', claimStatus: "ADDITIONAL_INFO_REQUIRED", dateSubmitted: "2007-04-26T00:00:00", firstName: "Saul", lastName: "Goodman" },
        {  claimNumber:'2', claimStatus: "COMPLETED", dateSubmitted: "2013-04-26T00:00:00", firstName: "Peter", lastName: "Parker"         },
        {  claimNumber:'3', claimStatus: "COMPLETED", dateSubmitted: "2033-04-26T00:00:00", firstName: "Walter", lastName: "White"         }
    ];
    
    private records = [
        {
            userID: '1',
            claims: ['1','2']
        },
        {
            userID: '2',
            claims: ['3']
        }
        
    ]

    //allclaims
    getClaims(claimStatus?: 'COMPLETED' | 'ADDITIONAL_INFO_REQUIRED'){
        if(claimStatus){
            return this.claims.filter((claim)=>claim.claimStatus==claimStatus);
        }
        return this.claims;
    }

    //oneclaim
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


    //all claims for a userid
    getUserClaims(userId: string){
        const claims = this.records.find((userRecord) => userRecord.userID == userId);      //find all claimnumbers under the userid
        const claimNumbers = claims.claims;                                                 //destructure into list of claim numbers
        claimNumbers.filter( (claimN) =>  {claimN!=null})                                   //filter for null values

        
        const claimDetails = [];                                                            //get all claim details from the claim list
        claimNumbers.forEach(
            (e)=>{
                    
                     claimDetails.push(this.getClaim(e))
            }
         
         );

                                                                                            //restructure for output as needed
        const res =[];
        claimDetails.forEach(
            (c) => {
                
                res.push(  
                    
                        { 
                            patientDetails:{
                                firstName :c.firstName,
                                lastName  :c.lastName
                            }, 
                            claimDetails:{
                                claimNumber: c.claimNumber,
                                dateSubmitted: c.dateSubmitted,
                                claimStatus: c.claimStatus
                            }
                        }
                    

                    );
            }
        );


        console.log(res);
        return res;
        
    }
}


