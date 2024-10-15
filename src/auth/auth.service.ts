import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2'

@Injectable()
export class AuthService{

  constructor(private prisma: PrismaService){}

  login(){
    return {message: 'I am logged in'};
  }

  async signup(signUpDto: AuthDto){

    const hash = await argon.hash(signUpDto.password);  //generate the password hash

    const user = await this.prisma.user.create({
      data: {
        email: signUpDto.email,
        hash,
      }
    })
    return user;
  }
}