import { ApiProperty } from "@nestjs/swagger"

export class CategoryDto{
    @ApiProperty({description:'分类名称',example:"前端"})
    name:string
}