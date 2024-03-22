import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from '../src/user/entities/user.entity'


@Module({
    imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          password: 'infernus',
          username: 'postgres',
          entities: [User],
          database: 'SignUp_DB',
          synchronize: false,
          logging: true,
        }),
        TypeOrmModule.forFeature([User]),
      ],
      exports: [TypeOrmModule],
})
export class DatabaseModule {}
