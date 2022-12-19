import { Notification } from "@app/entities/notification";
import { NotificationsRepository } from "@app/repositories/notification-repository";
import { Injectable } from "@nestjs/common";

interface GetRecipientNotificationRequest {
  recipientId: string;
}

interface GetRecipientNotificationResponse {
  notifications: Notification[]
}

@Injectable()
export class GetRecipientNotification {
  constructor(
    private notificationRepository: NotificationsRepository
  ) {}

  async execute(
    request: GetRecipientNotificationRequest
    ): Promise<GetRecipientNotificationResponse> {
    const { recipientId } = request;

    const notifications = 
      await this.notificationRepository.findManyByRecipientId(
        recipientId
      );

    return {notifications}
  }
}