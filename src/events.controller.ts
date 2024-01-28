import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEventDto } from './create-event.dto';
import { UpdateEventDto } from './update-event.dto';
import { Event } from './event.entity';

@Controller('events')
export class EventsController {
  private events: Event[] = [];

  @Get()
  findAll() {}

  @Get(':id')
  findOne(@Param('id') id) {}

  @Post()
  create(@Body() input: CreateEventDto) {}

  @Patch(':id')
  update(@Param('id') id, @Body() input: UpdateEventDto) {
    return input.when;
  }

  @Delete(':id')
  remove(@Param('id') id) {}
}
