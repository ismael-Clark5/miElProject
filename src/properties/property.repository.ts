import { Repository, EntityRepository } from "typeorm";
import { Property } from "./properties.entity";
import { ListPropertyDto } from "./dto/list-property.dto";
import { PropertyCondition, PropertyStatus } from "./properties-status.enum";
@EntityRepository(Property)
export class PropertyRepository extends Repository<Property> {
    async listProperty(listPropertyDto: ListPropertyDto): Promise<Property> {
        const { address,
            listingPrice,
            date_of_construction,
            owner,
            conditionOfProperty,
            status, } = listPropertyDto;
        const property = new Property();
        property.address = address;
        property.conditionOfProperty = PropertyCondition.NOT_REMODELED;  //figure out how to specify status
        property.listing_price = listingPrice;
        property.date_of_construction = date_of_construction;
        property.owner = owner;
        property.status = PropertyStatus.AVAILABLE;
        await property.save();

        return property;
    }
}