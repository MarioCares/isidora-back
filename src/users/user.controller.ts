import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
import RequestWithUser from '../authentication/requestWithUser.interface';

@Controller('users')
export default class UsersController {
  @Get('listado')
  @UseGuards(JwtAuthenticationGuard)
  async getUsers(@Req() req: RequestWithUser) {
    return ['Juanito', 'Pepito'];
  }
}
