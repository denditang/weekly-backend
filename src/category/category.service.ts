import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryEntity)
        private readonly categoryRepository:Repository<CategoryEntity>
    ){}
    async findAll(): Promise<CategoryDto[]> {
        return await this.categoryRepository.find();
    }

}
