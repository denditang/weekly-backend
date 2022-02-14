import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ length: 240 })
  name: string;
}