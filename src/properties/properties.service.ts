import { Injectable, NotFoundException } from '@nestjs/common';
import { PropertyRepository } from './property.repository';
import { InjectRepository } from "@nestjs/typeorm";
import { Property } from './properties.entity';
import { ListPropertyDto } from './dto/list-property.dto';
import { PropertyCondition, PropertyStatus } from './properties-status.enum';
@Injectable()
export class PropertiesService {
    constructor(
        @InjectRepository(PropertyRepository)
        private propertyRepository: PropertyRepository,
    ) { }

    async getPropertyByAddress(address: string): Promise<Property> {
        const found = await this.propertyRepository.findOne(address);
        if (!found) {
            throw new NotFoundException(`There is no available property with address "${address}"`);
        }
        return found;
    }

    async listProperty(listPropertyDto: ListPropertyDto) {
        return await this.propertyRepository.listProperty(listPropertyDto);
    }

}
