import { Controller, Get, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users2')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getHello(): string {
    console.log('get users');
    return this.usersService.getHello();
  }

  // @Post()
  // async createProduct(@Res() response /* @Body() product: Product */) {
  //   const newProduct = await this.usersService.createProduct(product);
  //   return response.status(HttpStatus.CREATED).send({
  //     newProduct,
  //   });
  // }

  // @Get()
  // async fetchAll(@Res() response) {
  //   console.log('raboti');
  //   const products = await this.productService.findAll();
  //   return response.status(HttpStatus.OK).send(products);
  // }
}