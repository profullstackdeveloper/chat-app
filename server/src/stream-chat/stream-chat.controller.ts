import { Controller, Get, Param, Req } from '@nestjs/common';
import { StreamChatService } from './stream-chat.service';
import { Request } from 'express';

@Controller('stream-chat')
export class StreamChatController {
  constructor(private readonly streamChatService: StreamChatService) { }

  @Get(':userId')
  getAuthToken(@Param() params: { userId: string }): string {
    console.log('called: ', params)
    const userId = params.userId;

    return `${userId}`;
  }
}
