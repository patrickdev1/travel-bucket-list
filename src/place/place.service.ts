import { Injectable } from '@nestjs/common';
import { CreatePlaceDto, EditPlaceDto } from './dto';

let data = [
  {
    id: '1',
    name: 'America',
    capital: 'Washington DC',
  },
  {
    id: '2',
    name: 'Australia',
    capital: 'Canberra',
  },
  {
    id: '3',
    name: 'India',
    capital: 'New Delhi',
  },
  {
    id: '4',
    name: 'New Zealand',
    capital: 'Auckland',
  },
];

@Injectable()
export class PlaceService {
  getPlaces() {
    return data;
  }
  getPlacesById(placeId: string) {
    console.log({ placeId });
    return data.filter((d) => d.id === placeId);
  }

  createPlace(dto: CreatePlaceDto) {
    data.push(dto);
    return data;
  }

  editPlace(id: string, dto: EditPlaceDto) {
    const index = data.findIndex((d) => d.id === id);
    data[index] = { ...data[index], ...dto };
    return data;
  }
  deletePlace(id: string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const index = data.findIndex((d) => d.id === id);
    const newData = data.filter((d) => d.id !== id);
    data = [...newData];
    return data;
  }
}
