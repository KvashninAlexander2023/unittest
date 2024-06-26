import { StudentType } from "../02-object/02";
import { addSkill, doesStudentLiveIn, makeStudentActiv } from "./03";

let student: StudentType;
beforeEach(() => {
  student = {
    id: 1,
    name: "Sashka",
    age: 40,
    isActive: false,

    address: {
      streetTitle: "Surganova 2",
      city: {
        title: "Minsk",
      },
    },

    technologies: [
      { id: 1, title: "HTML" },
      { id: 2, title: "CSS" },
      { id: 3, title: "React" },
    ],
  };
});

test.skip("new tech skill should be added to student", () => {
  expect(student.technologies.length).toBe(3);

  addSkill(student, "JS");

  expect(student.technologies.length).toBe(4);
  expect(student.technologies[3].title).toBe("JS");
  expect(student.technologies[3].id).toBeDefined();
});

test.skip("student is active", () => {
  expect(student.isActive).toBe(false);

  makeStudentActiv(student);

  expect(student.isActive).toBe(true);
});

test.skip("does student live in city?", () => {
  let result1 = doesStudentLiveIn(student, "Moscow");
  let result2 = doesStudentLiveIn(student, "Minsk");

  expect(result1).toBe(false);
  expect(result2).toBe(true);
});
