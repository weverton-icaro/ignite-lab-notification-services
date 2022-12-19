import { SendNotification } from '@app/use-cases/send-notification.use-case';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';
import { NotificationsController } from './kafka/controller/notifications.controller';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationsController],
})
export class MessagingModule {}