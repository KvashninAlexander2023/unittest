import {governmentBuildingsType, HousesType} from "../02-object/02_02"



export const getStreetsTitleGovernmentBuildings = (
  buildings: Array<governmentBuildingsType>) =>{
      return buildings.map(b => b.address.street.title)
  }





export const getStreetsTitleOfHous = (
  houses: Array<HousesType>) =>{
      return houses.map(b => b.address.street.title)
  }

export const createMessages = (
  houses: Array<HousesType>) =>{
      return houses.map(b => `Hello guys from ${b.address.street.title}`)
  }