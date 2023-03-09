import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClaimsModule } from './claims/claims.module';
import { DocuModule } from './docu/docu.module';

@Module({
  imports: [ClaimsModule, DocuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
