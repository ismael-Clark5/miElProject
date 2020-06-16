import { Module } from '@nestjs/common';
import {PropertiesController} from './properties.controller';
import { PropertiesService } from './properties.service';
import { PropertyRepository } from './property.repository';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([PropertyRepository])
    ],
    controllers: [PropertiesController],
    providers: [PropertiesService],
})
export class PropertiesModule {}
