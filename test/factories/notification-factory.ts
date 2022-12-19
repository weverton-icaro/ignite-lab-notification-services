import { Content } from "@app/entities/content";
import { Notification, NotificationData } from "@app/entities/notification";

type Override = Partial<NotificationData>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade.'),
    recipientId: 'recipient-2',
    ...override
  })
}