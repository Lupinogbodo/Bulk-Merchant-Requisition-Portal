import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from '../src/user/entities/user.entity'
import { Form } from 'src/form/entities/form.entity';


@Module({
    imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          password: 'infernus',
          username: 'postgres',
          entities: [User,Form],
          database: 'SignUp_DB',
          synchronize: true,
        }),
        TypeOrmModule.forFeature([User,Form]),
      ],
      exports: [TypeOrmModule],
})
export class DatabaseModule {}
