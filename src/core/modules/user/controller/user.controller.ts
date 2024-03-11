import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "../service/user.service";
import { UpdatePasswordDto } from "../../../dto/user.dto";
import { raw } from "express";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  async findAll(): Promise<User[]> {
    const users: User[] = await this.userService.getAllUsers();
    return users;
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
  }

  @Post()
  async createNewUser(@Body() user: User) {
    const newUser: User = await this.userService.createUser(user);
    return newUser;
  }

  @Put()
  updateUserPassword(@Param("id") id: string, @Body() user: UpdatePasswordDto) {

  }
}
