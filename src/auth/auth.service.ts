import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
  login(){
    return {message: 'I am logged in'};
  }

  signup(){
    return {message: 'I have signed up'};
  }
}