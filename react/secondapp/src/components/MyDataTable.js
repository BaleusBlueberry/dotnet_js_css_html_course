import { MyDataRow } from "./MyDataRow";
import { useState } from "react";
const listOfPeople = [
  { id: 245, fName: "John", lName: "smith", age: 19 },
  { id: 865, fName: "agera", lName: "notas", age: 64 },
  { id: 644, fName: "fima", lName: "babanov", age: 35 },
  { id: 118, fName: "taron", lName: "ganon", age: 44 },
];

// function displayLineForPerson(person) {
//   return (
//     <tr key={person.id}>
//       <td>{person.id}</td>
//       <td>{person.fName}</td>
//       <td>{person.lName}</td>
//       <td>{person.age}</td>
//     </tr>
//   );
// }

function MyDataTable() {
  // const [emotion, setEmotion] = useState("happy");
  // const [color, setColor] = useState("blue");
  const [people, setPeople] = useState(listOfPeople);
  const [counter, setCounter] = useState(0);

  // const addPersonDirect = () =>
  //   listOfPeople.push({ id: 225, fName: "Sam", lName: "rato", age: 48 });

  const addPersonToState = () => setPeople([...people, getPerson()]);

  const addCounter1 = () => setCounter(counter + 1);

  // gets the information form the html
  const getPerson = () => {
    const id = document.getElementById("person-id-").value;
    const fName = document.getElementById("first-name-").value;
    const lName = document.getElementById("last-name-").value;
    const age = document.getElementById("age-").value;
    const newPerson = { id: id, fName: fName, lName: lName, age: age };
    return newPerson;
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>First name</td>
            <td>Last name</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <MyDataRow key={person.id} person={person} />
          ))}
        </tbody>
      </table>
      {/* <button onClick={addPersonDirect}>add a person</button> */}
      <button onClick={addCounter1}>{counter}</button>
      <button onClick={addPersonToState}>click here to add</button>
      <p>Id:</p>
      <input id="person-id-" placeholder="Id"></input>
      <p>First name:</p>
      <input id="first-name-" placeholder="First name"></input>
      <p>Last name:</p>
      <input id="last-name-" placeholder="Last name"></input>
      <p>Age:</p>
      <input id="age-" placeholder="Age"></input>
    </>
  );
}

export { MyDataTable };
