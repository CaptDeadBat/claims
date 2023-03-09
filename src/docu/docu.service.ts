import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class DocuService {

    private documentList = [
        {
            claimNumber:'1',
            docs: [
                {
                    "categoryName": "Certificate",
                    "status": "Received",
                    "documents": [
                        {
                            "documentName": "Certificate1.pdf",
                            "fileSize": 2000000
                        },
                        {
                            "documentName": "Certificate2.pdf",
                            "fileSize": 2500000
                        },
                        {
                            "documentName": "Certificate3.pdf",
                            "fileSize": 1000000
                        }
                    ]
                },
                {
                "categoryId": "MEDICAL_REPORTS",
                "categoryName": "Medical Reports",
                "status": "Pending",
                "documents": [
                ]
                }
            ]
        },
        {
            claimNumber:'2',
            docs: [
                {
                    "categoryName": "Certificate",
                    "status": "Received",
                    "documents": [
                        {
                            "documentName": "Certificate1.pdf",
                            "fileSize": 2000000
                        },
                        {
                            "documentName": "Certificate2.pdf",
                            "fileSize": 2500000
                        },
                        {
                            "documentName": "Certificate3.pdf",
                            "fileSize": 1000000
                        }
                    ]
                },
                {
                "categoryId": "MEDICAL_REPORTS",
                "categoryName": "Medical Reports",
                "status": "Pending",
                "documents": [
                ]
                }
            ]
        }
    ]

    getDocs(claimNumber: string){
        const docs = this.documentList.find((docs)=> docs.claimNumber.localeCompare(claimNumber) == 0);

        if(!docs){
            throw new NotFoundException();
        }
        return docs;
    }

}
