import { makeNotification } from "@test/factories/notification-factory";
import { NotificationRepositoryInMemory } from "@test/repositories/notifications-repository-in-memory";
import { GetRecipientNotification } from "../get-recipient-notification";


describe('Get Recipient Notifications ', () => {
  it('Should be able to get recipient notifications', async () => {
    const notificationRepositoryInMemory = new NotificationRepositoryInMemory()
    const getRecipientNotification = new GetRecipientNotification(notificationRepositoryInMemory);

    await notificationRepositoryInMemory.create(
      makeNotification({
        recipientId: 'recipient-1'
      })
    );

    await notificationRepositoryInMemory.create(
      makeNotification({
        recipientId: 'recipient-1'
      })
    );

    await notificationRepositoryInMemory.create(
      makeNotification({
        recipientId: 'recipient-2'
      })
    );

    const { notifications } = await getRecipientNotification.execute({
      recipientId: 'recipient-1'
    })


    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(expect.arrayContaining([
      expect.objectContaining({recipientId: 'recipient-1'}),
      expect.objectContaining({recipientId: 'recipient-1'})
    ]))
  })
})