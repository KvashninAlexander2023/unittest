import { ManType } from "./destructuring";

let props: ManType;

beforeEach(() => {
  props = {
    name: "Dimych",
    age: 40,
    lessons: [{ title: "1" }, { title: "2" }],
    address: {
      street: {
        title: "Nez street",
      },
    },
  };
});

test("", () => {
  let props = {
    name: "Dimych",
    age: 40,
    lessons: [{ title: "1" }, { title: "2" }],
    address: {
      street: {
        title: "Nez street",
      },
    },
  };

  // const age = props.age;
  // const lessons = props.lessons;

  const { age, lessons } = props;
  const {
    address: {
      street: { title },
    },
  } = props;
  // const {title} = props.address.street

  expect(age).toBe(40);
  expect(lessons.length).toBe(2);
  expect(title).toBe("Nez street");
});
