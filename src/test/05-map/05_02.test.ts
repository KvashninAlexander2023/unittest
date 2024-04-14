import { CityType } from "../02-object/02_02";

let city: CityType;

beforeEach(() => {
  city = {
    title: "New York",
    houses: [
      {
        id:1,
        buildAt: 2012,
        repaired: false,
        address: {
          number: 100,
          street: {
            title: "Write street",
          },
        },
      },
      {
        id:2,
        buildAt: 2008,
        repaired: false,
        address: {
          number: 101,
          street: {
            title: "Happy street",
          },
        },
      },
      {
        id:3,
        buildAt: 2020,
        repaired: false,
        address: {
          number: 102,
          street: {
            title: "Happy street",
          },
        },
      },
    ],
    governmentBuildings: [
      {
        type: "HOSPITAL",
        budget: 200000,
        staffCount: 200,
        address: {
          street: {
            title: "Central Str",
          },
        },
      },
      {
        type: "FIRE-STATION",
        budget: 500000,
        staffCount: 1000,
        address: {
          street: {
            title: "South Str",
          },
        },
      },
    ],
    citizensNumber: 1000000,
  };
});


// время 16:33 видео map, доделать!!!!!!!!!!!!!!!!