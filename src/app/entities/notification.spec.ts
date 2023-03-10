import { Content } from "./content";
import { Notification } from "./notification";

describe('Notification', () => {
  it('Should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade.'),
      category: 'social',
      recipientId: 'recipient-example-id',
    })

    expect(notification).toBeTruthy();
  })
})