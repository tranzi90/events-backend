import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('events')
export class EventsController {
  @Get()
  findAll() {}

  @Get(':id')
  findOne() {}

  @Post()
  create(@Body() input) {}

  @Patch(':id')
  update() {}

  @Delete(':id')
  remove() {}
}
