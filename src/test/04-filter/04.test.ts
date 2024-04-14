import { CourseType } from "./04";

test.skip("should take men older then 90", () => {
  const ages = [10, 20, 22, 1, 100, 90, 14];

  // const predicate = (age: number) => {
  //   return age > 90;
  // };
  const predicate = (age: number) => age > 90;

  // const oldAges = ages.filter(predicate);
  // const oldAges = ages.filter((age: number) => age > 90);
  const oldAges = ages.filter((age) => age > 90);

  expect(oldAges.length).toBe(1);
  expect(oldAges[0]).toBe(100);
});

test.skip("should take courses chipper 160", () => {
  const courses = [
    { title: "css", price: 100 },
    { title: "js", price: 200 },
    { title: "react", price: 150 },
  ];

  // const cheepPredicate = (course:CourseType)=>{
  //   return course.price < 160
  // }

  // const cheepCorses = courses.filter(cheepPredicate);
  const cheepCorses = courses.filter((course) => course.price < 160);

  expect(cheepCorses.length).toBe(2);
  expect(cheepCorses[0].title).toBe("css");
  expect(cheepCorses[1].title).toBe("react");
});

test.skip("get only completed tasks", () => {
  const tasks = [
    { id: 1, title: "Bread", isDone: false },
    { id: 2, title: "Milk", isDone: true },
    { id: 3, title: "Solt", isDone: false },
    { id: 4, title: "Sugar", isDone: true },
  ];

  const completedTasks = tasks.filter((task) => task.isDone);

  expect(completedTasks.length).toBe(2);
  expect(completedTasks[0].id).toBe(2);
  expect(completedTasks[1].id).toBe(4);
});
