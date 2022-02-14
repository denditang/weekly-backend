import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { CONFIG } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: CONFIG[CONFIG.env].host,
    port: CONFIG[CONFIG.env].port,
    username: CONFIG[CONFIG.env].username,
    password: CONFIG[CONFIG.env].password,
    database: CONFIG[CONFIG.env].database,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
