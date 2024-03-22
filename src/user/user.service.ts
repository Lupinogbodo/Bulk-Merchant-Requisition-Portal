import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobPosition, User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { hash, compare } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    const newUser = new User();
    newUser.username = user.username;
    newUser.email = user.email;
    newUser.password = await hash(user.password, 10);
    newUser.jobPosition = user.jobPosition;
    return this.userRepository.save(newUser);

    
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user =  this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async delete(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('User not found');
    }
  }
}
