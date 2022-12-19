import { makeNotification } from '@test/factories/notification-factory';
import { NotificationRepositoryInMemory } from '@test/repositories/notifications-repository-in-memory';
import { CountRecipientNotification } from '../count-recipient-notification';

describe('Count Recipient Notifications ', () => {
  it('Should be able to count recipient notifications', async () => {
    const notificationRepositoryInMemory = new NotificationRepositoryInMemory();
    const countRecipientNotification = new CountRecipientNotification(
      notificationRepositoryInMemory,
    );

    await notificationRepositoryInMemory.create(
      makeNotification({
        recipientId: 'recipient-1',
      }),
    );

    await notificationRepositoryInMemory.create(
      makeNotification({
        recipientId: 'recipient-1',
      }),
    );

    await notificationRepositoryInMemory.create(
      makeNotification({
        recipientId: 'recipient-2',
      }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
