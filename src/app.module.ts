import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import {DatabaseModule} from '../database/database.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginApiModule } from './login-api/login-api.module';

@Module({
  imports:[
            DatabaseModule,
            LoginApiModule
          ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}