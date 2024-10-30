import { Test, TestingModule } from '@nestjs/testing';
import { StreamChatController } from './stream-chat.controller';
import { StreamChatService } from './stream-chat.service';

describe('StreamChatController', () => {
  let controller: StreamChatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StreamChatController],
      providers: [StreamChatService],
    }).compile();

    controller = module.get<StreamChatController>(StreamChatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
