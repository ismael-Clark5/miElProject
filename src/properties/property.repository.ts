import { Repository, EntityRepository } from "typeorm";
import { Property } from "./properties.entity";

@EntityRepository(Property)
export class PropertyRepository extends Repository<Property> {

}