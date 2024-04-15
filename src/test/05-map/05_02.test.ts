import { CityType } from "../02-object/02_02";
import { createMessages, getStreetsTitleGovernmentBuildings, getStreetsTitleOfHous } from "./05-02";

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
            title: "White street",
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

test("list of streets of govermants building", () => {
  let streetsNames = getStreetsTitleGovernmentBuildings(city.governmentBuildings)

  expect(streetsNames.length).toBe(2)
  expect(streetsNames[0]).toBe('Central Str')
  expect(streetsNames[1]).toBe("South Str")
})


test("list of streets title", () => {
  let streetsNames = getStreetsTitleOfHous(city.houses)

  expect(streetsNames.length).toBe(3)
  expect(streetsNames[0]).toBe('White street')
  expect(streetsNames[1]).toBe('Happy street')
  expect(streetsNames[2]).toBe('Happy street')
 
})













test("create greeting messanges for streets", () => {
  let messanges  = createMessages(city.houses)

  expect(messanges.length).toBe(3)
  expect(messanges[0]).toBe('Hello guys from White street')
  expect(messanges[1]).toBe('Hello guys from Happy street')
  expect(messanges[2]).toBe('Hello guys from Happy street')
 
})

// время 16:33 видео map, доделать!!!!!!!!!!!!!!!!