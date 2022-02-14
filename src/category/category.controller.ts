import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';

@Controller('category')
@ApiTags('分类')
export class CategoryController {
    constructor(private readonly categoryService:CategoryService){}
    @Get()
    @ApiOperation({summary:'显示分类列表'})
    index():Promise<CategoryDto []>{
        return this.categoryService.findAll()
    }
}
