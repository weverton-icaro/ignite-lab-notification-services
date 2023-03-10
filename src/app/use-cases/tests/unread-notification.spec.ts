import { makeNotification } from '@test/factories/notification-factory';
import { NotificationRepositoryInMemory } from '@test/repositories/notifications-repository-in-memory';
import { NotificationNotFound } from '../errors/notification-not-found-error';
import { UnreadNotification } from '../unread-notication';

describe('Unread notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationsRepository = new NotificationRepositoryInMemory();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({
      readAt: new Date(),
    });

    await notificationsRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a non existing notification', async () => {
    const notificationsRepository = new NotificationRepositoryInMemory();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
