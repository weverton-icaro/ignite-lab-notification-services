import { Content } from './content';

describe('Notification content', () => {
  it('Should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma notificação.')
  
    expect(content).toBeTruthy();
  })
  
  it(
    'Should not be able create notification content with less than 5 characters',
    () => {
      expect(() => new Content('Olá')).toThrow()
    }
  )
  
  it(
    'Should not be able create notification content with more than 240 characters',
    () => {
      expect(() => new Content('a'.repeat(241))).toThrow()
    }
  )
})

