import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../../../dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
  }

  @Post()
  createNewUser(@Body() user: CreateUserDto) {}

  @Put()
  updateUserPassword(@Param('id') id: string, @Body() user: CreateUserDto) {}
}
