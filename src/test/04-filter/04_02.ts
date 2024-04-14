import {CityType, governmentBuildingsType} from "../02-object/02_02";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street);
}

export function getBuildingsWithStaffCountGreaterThan(buildings: Array<governmentBuildingsType>, count: number) {
    return buildings = buildings.filter(s => s.staffCount > count);}