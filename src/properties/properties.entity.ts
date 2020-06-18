import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { PropertyCondition, PropertyStatus } from "./properties-status.enum";

@Entity()
export class Property extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    address: string;
    
    @Column() 
    listing_price: number;

    @Column()
    date_of_construction: Date; 

    @Column()
    owner: string;

    @Column()
    conditionOfProperty: PropertyCondition;

    @Column()
    status: PropertyStatus;
}