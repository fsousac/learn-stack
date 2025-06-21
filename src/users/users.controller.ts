import { Body, Controller, Get, Param, Post, Request } from "@nestjs/common";
import { User } from "generated/prisma";
import { PrismaService } from "src/prisma/prisma.service";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() body: { email: string; password: string }) {
    return this.usersService.create(body.email, body.password);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(":email")
  async findByEmail(@Param("email") email: string) {
    return this.usersService.findByEmail(email);
  }
}
