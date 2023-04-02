import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePlaceDto } from './dto/createPlace.dto';
import { EditPlaceDto } from './dto/editPlace.dto';
import { PlaceService } from './place.service';

@Controller('place')
export class PlaceController {
  constructor(private placeService: PlaceService) {}

  @Get()
  getPlaces() {
    return this.placeService.getPlaces();
  }

  @Get(':id')
  getPlaceById(@Param('id') id: string) {
    console.log({ id });
    return this.placeService.getPlacesById(id);
  }

  @Post()
  createPlace(@Body() dto: CreatePlaceDto) {
    return this.placeService.createPlace(dto);
  }

  @Patch(':id')
  editPlace(@Param('id') id: string, @Body() dto: EditPlaceDto) {
    return this.placeService.editPlace(id, dto);
  }
  @Delete(':id')
  deletePlace(@Param('id') id: string) {
    return this.placeService.deletePlace(id);
  }
}
