import { NotificationRepositoryInMemory } from '@test/repositories/notifications-repository-in-memory';
import { SendNotification } from '../send-notification.use-case';

describe('Send notification', () => {
  it('Should be able to send a notification', async () => {
    const notificationRepositoryInMemory = new NotificationRepositoryInMemory();
    const sendNotification = new SendNotification(
      notificationRepositoryInMemory,
    );

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'recipient-example-id',
    });

    expect(notificationRepositoryInMemory.notifications).toHaveLength(1);
    expect(notificationRepositoryInMemory.notifications[0]).toEqual(
      notification,
    );
  });
});
