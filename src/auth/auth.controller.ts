import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService){}

  @Post('signup')
  signup(@Body() signUpDto: AuthDto){
    return this.authService.signup(signUpDto);
  }

  @Post('login')
  login(){
    return this.authService.login();
  }
}