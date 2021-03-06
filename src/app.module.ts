import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PropertiesModule} from './properties/properties.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [PropertiesModule, 
    TypeOrmModule.forRoot(typeOrmConfig),
    PropertiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
