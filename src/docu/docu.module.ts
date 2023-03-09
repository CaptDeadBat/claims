import { Module } from '@nestjs/common';
import { DocuController } from './docu.controller';
import { DocuService } from './docu.service';

@Module({
  controllers: [DocuController],
  providers: [DocuService]
})
export class DocuModule {}
