import { makeNotification } from '@test/factories/notification-factory';
import { NotificationRepositoryInMemory } from '@test/repositories/notifications-repository-in-memory';
import { CancelNotification } from '../cancel-notification';
import { NotificationNotFound } from '../errors/notification-not-found-error';

describe('Cancel notification', () => {
  it('Should be able to Cancel a notification', async () => {
    const notificationRepositoryInMemory = new NotificationRepositoryInMemory();
    const cancelNotification = new CancelNotification(
      notificationRepositoryInMemory,
    );

    const notification = makeNotification();

    await notificationRepositoryInMemory.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationRepositoryInMemory.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('Should not be able to cancel a non existing notification', async () => {
    const notificationRepositoryInMemory = new NotificationRepositoryInMemory();
    const cancelNotification = new CancelNotification(
      notificationRepositoryInMemory,
    );

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
