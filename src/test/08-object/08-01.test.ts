import { userObj, usersType } from "./08-01";

let users: usersType;

beforeEach(() => {
  users = {
    "101": { id: 101, name: "Dimych" },
    "1212": { id: 1212, name: "Natasha" },
    "34345": { id: 34345, name: "Valera" },
    "1": { id: 1, name: "Katya" },
  };
});

// test("should select corresponding user from obj", () => {
//   expect(userObj[0]).toBe("Dimych");
//   expect(userObj[1]).toBe("Natasha");
//   expect(userObj[2]).toBe("Valera");
//   expect(userObj[3]).toBe("Katya");
// });

test("should update corresponding user from obj", () => {
  users["1"].name = "Ekaterina";

  expect(users["1"].name).toBe("Ekaterina");
  expect(users["1"]).toEqual({ id: 1, name: "Ekaterina" });
});

test("should delete corresponding user from obj", () => {
  delete users["1"];

  expect(users["1"]).toBeUndefined();
});
