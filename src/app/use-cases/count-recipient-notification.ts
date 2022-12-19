import { NotificationsRepository } from "@app/repositories/notification-repository";
import { Injectable } from "@nestjs/common";

interface CountRecipientNotificationRequest {
  recipientId: string;
}

interface CountRecipientNotificationResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotification {
  constructor(
    private notificationRepository: NotificationsRepository
  ) {}

  async execute(
    request: CountRecipientNotificationRequest
    ): Promise<CountRecipientNotificationResponse> {
    const { recipientId } = request;

    const count = await this.notificationRepository.countManyByRecipientId(recipientId)

    return {
      count
    }
  }
}