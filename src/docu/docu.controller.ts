import { Controller, Get, Param } from '@nestjs/common';
import { DocuService } from './docu.service';


@Controller('docu')
export class DocuController {

    constructor(private readonly docuService: DocuService){

    }


//GET /docu/:claimNumber-->{...}
@Get(':claimNumber')
getDocuments(@Param('claimNumber') claimNumber: string){
    
    return this.docuService.getDocs(claimNumber);

    
}


}
