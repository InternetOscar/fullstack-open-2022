import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas", key: 1 }]);
	const [newName, setNewName] = useState("");

	function isNewName(name) {
		return name.name === newName;
	}

	const checkPersons = (event) => {
		event.preventDefault();
		console.log(persons);

		if (persons.find(isNewName)) {
			alert(`${newName} is already added to the phonebook`);
			setNewName("");
		} else {
			addPersons();
			console.log(newName, "added");
		}
	};

	const addPersons = (event) => {
		const personObject = {
			name: newName,
			key: persons.length + 1,
		};
		setPersons(persons.concat(personObject));
		setNewName("");
		// console.log("button clicked", event.target);
	};

	const handleNameChange = (event) => {
		console.log(event.target.value);
		setNewName(event.target.value);
	};

	return (
		<div>
			<div>debug: {newName}</div>
			<h2>Phonebook</h2>
			<form onSubmit={checkPersons}>
				<div>
					<label>Name: </label>
					<input value={newName} onChange={handleNameChange} />
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map((person) => (
				<p key="person.key">{person.name}</p>
			))}
		</div>
	);
};

export default App;
