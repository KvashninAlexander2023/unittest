const studentObj = {
  id100: { id: "id100", title: "Andrew" },
  id2: { id: "id2", title: "Anna" },
  id4: { id: "id4", title: "Sasha" },
  ///////////////////

  id66654646: {
    id: "id66654646",
    title: "Marina",
    technologies: {
      1: { id: 1, title: "CSS" },
      2: { id: 2, title: "HTML" },
      3: { id: 3, title: "JS" },
      4: { id: 4, title: "Reac" },
    },
  },
};
studentObj["id66654646"].title += " Sun";

const marina2 = studentObj["id66654646"];
const tech2 = marina2.technologies["4"];
tech2.title = "React";

console.log(studentObj);
