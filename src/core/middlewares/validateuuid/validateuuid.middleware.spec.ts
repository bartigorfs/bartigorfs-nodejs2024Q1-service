import { ValidateuuidMiddleware } from './validateuuid.middleware';

describe('ValidateuuidMiddleware', () => {
  it('should be defined', () => {
    expect(new ValidateuuidMiddleware()).toBeDefined();
  });
});
