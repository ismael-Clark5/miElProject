import { Controller, Get, Param, Post } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { Property } from './properties.entity';
import { ListPropertyDto } from './dto/list-property.dto';
@Controller('properties')
export class PropertiesController {
    constructor(private propertiesService: PropertiesService) { }

    @Get(':/address')
    async getPropertyByAddress(@Param('address') address: string): Promise<Property> {
        return await this.propertiesService.getPropertyByAddress(address);
    }

    @Post(':/add_property')
    async listProperty(listPropertyDto: ListPropertyDto): Promise<Property> {
        return await this.propertiesService.listProperty(listPropertyDto);
    }
}
