import { Module } from '@hornts/common';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  injectables: [UsersService],
})
export class UsersModule {}
