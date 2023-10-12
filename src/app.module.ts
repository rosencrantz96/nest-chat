import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ChatGateway } from './app.gateway';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ChatGateway], // 게이트웨이를 프로바이더로 등록
})
export class AppModule {}
