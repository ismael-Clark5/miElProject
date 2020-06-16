import { TypeOrmModuleOptions} from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql', 
    host: '50.87.192.179', 
    port: 3306,
    username: 'ezcaza_iclark',
    password: 'Shamelessdb123$',
    database: 'mainDB',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true, 
}