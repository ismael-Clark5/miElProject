import { PropertyCondition, PropertyStatus } from "../properties-status.enum";

export class ListPropertyDto {
    address: string;
    listingPrice: number;
    date_of_construction: Date;
    owner: string;
    conditionOfProperty: PropertyCondition;
    status: PropertyStatus;
}