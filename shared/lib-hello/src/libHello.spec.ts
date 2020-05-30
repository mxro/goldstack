import { message } from './libHello';

describe('Hello lib', () => {
  it('Should return the correct constant', () => {
    expect(message).toBe('Hello from helloLib');
  });
});
