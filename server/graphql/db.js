export const people = [
  {
    id: "0",
    name: "owner",
    age: 23,
    gender: "male"
  },
  {
    id: "1",
    name: "hogu",
    age: 24,
    gender: "female"
  },
  {
    id: "2",
    name: "mersion",
    age: 25,
    gender: "male"
  },
  {
    id: "3",
    name: "james",
    age: 26,
    gender: "female"
  },
  {
    id: "4",
    name: "noah",
    age: 27,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
