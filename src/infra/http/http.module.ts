import { CancelNotification } from '@app/use-cases/cancel-notification';
import { CountRecipientNotification } from '@app/use-cases/count-recipient-notification';
import { ReadNotification } from '@app/use-cases/read-notification';
import { SendNotification } from '@app/use-cases/send-notification.use-case';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { GetRecipientNotification } from '../../app/use-cases/get-recipient-notification';
import { UnreadNotification } from '../../app/use-cases/unread-notication';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    CountRecipientNotification,
    GetRecipientNotification,
  ],
})
export class HttpModule {}
