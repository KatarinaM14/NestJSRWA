import { BadRequestException, Body, Controller, Post, Res } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { resourceUsage } from 'process';

@Controller('auth')
export class AuthController {

    constructor(
        private userService: UserService,
        private jwtService: JwtService
      ){

    }

      // @Post('register')
    // async register(@Body() body){

    // }

    @Post('register')
    async register(
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password')  password: string
        ){
            const hashedPassword = await bcrypt.hash(password,  12);

            const user = await this.userService.create({
              name,
              email,
              password: hashedPassword
            });

            //const {password, ...result } = user;
            delete user.password;

            console.log(user.email);
            console.log(user.name);

            return user;
    }

    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password')  password: string,
        @Res({passthrough: true}) response: Response
    ) {

      console.log("Email login: " + email);
      console.log("Password: " + password);
        const user = await this.userService.findOne({email});

        if(!user){
          throw new BadRequestException("Invalid email");
        }

        console.log("USer" + user);
        if(!await bcrypt.compare(password, user.password)){
          throw new BadRequestException("Invalid password");
        }

        const jwt = await this.jwtService.signAsync({id: user.id});

        response.cookie('jwt', jwt, {httpOnly: true});


        return jwt;
    }

    @Post('logout')
    async logout(@Res({passthrough: true}) response: Response){

        response.clearCookie('jwt');

        return {
          message: 'success'
        }
    }

    
}
