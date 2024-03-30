type TechnologiesType = {
  id: number;
  title: string;
};

type LocalCityType = {
  countryTitle: string;
};

type AddressType = {
  streetTitle: string;
  city: LocalCityType;
};

export type StudentType = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  address: AddressType;
  technologies: Array<TechnologiesType>;
};

export const student: StudentType = {
  // синтаксис литерала обьекта
  id: 1,
  name: "Sashka",
  age: 40,
  isActive: true,

  address: {
    streetTitle: "Surganova 2",
    city: {
      countryTitle: "Belarus",
    },
  },

  technologies: [
    { id: 1, title: "HTML" },
    { id: 2, title: "CSS" },
    { id: 3, title: "React" },
  ],
};

console.log(student.age);
console.log(student.name);
console.log(student.address.city);
console.log(student.technologies[2].title);
