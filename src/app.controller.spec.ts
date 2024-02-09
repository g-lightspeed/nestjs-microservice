import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppModule } from './app.module';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get(AppService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('getAccumulate', () => {
    it('should accumulate query', async () => {
      const spy = jest
        .spyOn(appService, 'getAccumulate')
        .mockImplementation(() => Promise.resolve(0));
      const query = '1,2';
      await appController.getAccumulate(query);
      expect(spy).toHaveBeenCalledWith(query);
    });
  });
});
