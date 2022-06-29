import { Body, Controller, Get, Post, Req, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService,
        private jwtService: JwtService
        ){

    }

    // // @Post('register')
    // // async register(@Body() body){

    // // }

    // @Post('register')
    // async register(
    //     @Body('name') name: string,
    //     @Body('email') email: string,
    //     @Body('password')  password: string
    //     ){

    // }
    @Get('all')
    public getUsers(){
        return this.userService.getAllUsers();
    }

    @Get('currentUser')
    async user(
        @Req() request: Request){
        try {
            const cookie = request.cookies['jwt'];

            console.log("JWT- COOKIE : " + cookie);

             const data = await this.jwtService.verifyAsync(cookie);


             console.log("DATA email: " + data.email);
             console.log("DATA name: " + data.name);


            if(!data) {
                throw new UnauthorizedException();
            }
             
            const user = await this.userService.findOne({id: data['id']});


            const { password, ...result } = user;

            console.log(result);

            return result;

        }catch(e){
            throw new UnauthorizedException();
        }
    }
}
