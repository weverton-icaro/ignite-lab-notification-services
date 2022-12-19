import { PrismaService } from '@infra/database/prisma/prisma.service';
import { CreateNotificationBody } from '@infra/http/dtos/create-notification-body';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getNotification() {
    return this.prisma.notification.findMany();
  }

  async createNotification({
    content,
    category,
    recipientId,
  }: CreateNotificationBody) {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
