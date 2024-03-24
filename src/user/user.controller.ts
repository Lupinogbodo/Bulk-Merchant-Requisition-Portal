import { Controller, Post, Body, ConflictException, Get, Param, Delete, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import {  ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  @ApiTags('sign-up')
  async signUp(@Body() user: CreateUserDto): Promise<User> {
    const existingUser = await this.userService.findByEmail(user.email);
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }
    return this.userService.create(user);
  }

  @Get()
  @ApiTags('sign-up')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('email/:email')
  @ApiTags('sign-up')
  async findByEmail(@Param('email') email: string): Promise<User> {
    return this.userService.findByEmail(email);
  }
  @Delete(':id')
  @ApiTags('sign-up')
  async delete(@Param('id') id: string): Promise<void> {
    const userId = parseInt(id, 10);
    try {
      await this.userService.delete(userId);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

}
