type StreetType = {
  title: string;
};

type AddressType = {
  number?: number;
  street: StreetType;
};

export type HousesType = {
  id: number
  buildAt: number;
  repaired: boolean;
  address: AddressType;
};

export type governmentBuildingsType = {
  type:  "HOSPITAL" | "FIRE-STATION"
  budget: number
  staffCount: number
  address: AddressType
};

export type CityType = {
  title: string;
  houses: Array<HousesType>;
  governmentBuildings: Array<governmentBuildingsType>;
  citizensNumber: number;
};
