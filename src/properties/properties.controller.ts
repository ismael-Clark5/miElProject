import { Controller, Get } from '@nestjs/common';
import { PropertiesService } from './properties.service';

@Controller('properties')
export class PropertiesController {
    constructor (private propertiesService: PropertiesService) {}

    
   
}
