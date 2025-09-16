import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ActivityModule } from './activity/activity.module';
import { TaskModule } from './task/task.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [UserModule, ActivityModule, TaskModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
