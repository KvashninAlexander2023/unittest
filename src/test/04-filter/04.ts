import { StudentType } from "../02-object/02";
import { governmentBuildingsType } from "../02-object/02_02";

const ages = [10, 20, 22, 1, 100, 90, 14];

const predicate = (age: number) => {
  return age > 90;
};

const oldAges = [100]; //>90

export type CourseType = {
  title: string
  price: number
}


const courses = [
  {title:"css", price: 100},
  {title:"js", price: 200},
  {title:"react", price: 150},
]

const cheepPredicate = (course:CourseType)=>{
  return course.price < 160
}
const cheepCorses = [
  {title:"css", price: 100},
  {title:"react", price: 150}
]