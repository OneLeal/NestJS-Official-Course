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

@Controller('coffees')
export class CoffeesController {
  @Get() // @Get('flavors') 表示嵌套路由: coffees/flavors
  findAll(@Query() paginationQuery: { limit: number; offset: number }) {
    const { limit, offset } = paginationQuery;
    return `this action returns all coffees, limit: ${limit}, offset: ${offset}`;
  }

  @Get(':id') // 接收动态参数
  findOne(@Param('id') id: string) {
    // @Param 可以通过传入字符串来访问特定参数属性
    return `this action returns #${id} coffee`;
  }

  @Post()
  create(@Body() body: any) {
    // @Body 也能传入一个字符串访问 body 中特定的属性
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return `this action updates #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `this action removes #${id} coffee`;
  }
}
