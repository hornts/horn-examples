import { Module } from '@hornts/common';

import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule]
})
export class AppModule {}
