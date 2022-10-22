import { useState } from "react";
import Persons from "./components/Persons.js";

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
	const [newName, setNewName] = useState("a new person...");

	// const Persons = ({ person }) => {
	// 	return <li>{person.content}</li>;
	// };

	const addPerson = (event) => {
		event.preventDefault();
		console.log("button clicked", event.target);
		const personObject = {
			content: newName,
			date: new Date().toISOString(),
			id: persons.length + 1,
		};

		setPersons(persons.concat(personObject));
		setNewName("");
	};

	const handleNameChange = (event) => {
		console.log(event.target.value);
		setNewName(event.target.value);
	};

	<div>debug: {newName}</div>;

	return (
		<div>
			<h2>Phonebook</h2>
			{/* <form>
				<div>
					name: <input />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form> */}
			<form onSubmit={addPerson}>
				<input value={newName} onChange={handleNameChange} />
				<button type="submit">save</button>
			</form>
			<h2>Numbers</h2>
			{persons.map((person) => (
				<Persons key={person.id} person={person} />
			))}
		</div>
	);
};

export default App;
