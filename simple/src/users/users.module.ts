import { Module } from '@hornts/common';

import { UsersService } from './users.service';

@Module({
  injectables: [UsersService],
})
export class UsersModule {}
