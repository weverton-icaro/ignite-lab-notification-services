import { Content } from "@app/entities/content";
import { Notification } from "@app/entities/notification";
import { NotificationsRepository } from "@app/repositories/notification-repository";
import { Injectable } from "@nestjs/common";

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(
    private notificationRepository: NotificationsRepository
  ) {}

  async execute(
    request: SendNotificationRequest
    ): Promise<SendNotificationResponse> {
    const {recipientId, content, category} = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category
    })

    await this.notificationRepository.create(notification)

    return {
      notification
    }
  }
}