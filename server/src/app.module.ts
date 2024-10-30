import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StreamChatModule } from './stream-chat/stream-chat.module';

@Module({
  imports: [StreamChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
