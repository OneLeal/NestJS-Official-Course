import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get() // @Get('flavors') 表示嵌套路由: coffees/flavors
  findAll(@Query() paginationQuery: { limit: number; offset: number }) {
    // const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll();
  }

  @Get(':id') // 接收动态参数
  findOne(@Param('id') id: string) {
    // @Param 可以通过传入字符串来访问特定参数属性
    return this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    // @Body 也能传入一个字符串访问 body 中特定的属性
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
