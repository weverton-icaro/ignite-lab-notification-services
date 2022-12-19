import { Notification } from "@app/entities/notification";
import { NotificationsRepository } from "@app/repositories/notification-repository";

export class NotificationRepositoryInMemory implements NotificationsRepository{
  public notifications: Notification[] = [];
  
  async create(notification: Notification){
    this.notifications.push(notification)
  }
  
  async findById(notificationId: string): Promise<Notification | null> {
    const notificaition = this.notifications.find(
      item => item.id === notificationId
    )
    
    if(!notificaition) {
      return null;
    }

    return notificaition;
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      item => item.id === notification.id
    );
    
    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter(notification => notification.recipientId === recipientId).length;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notifications.filter(notification => notification.recipientId === recipientId);
  }

}