import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([{ key: 1, name: "Arto Hellas", phone: "0412 345 678" }]);
	const [newName, setNewName] = useState("");
	const [newPhone, setNewPhone] = useState("");

	function isNewName(name) {
		return name.name === newName;
	}
	function isNewPhone(phone) {
		return phone.phone === newPhone;
	}

	const checkPersons = (event) => {
		event.preventDefault();
		console.log(persons);

		if (persons.find(isNewName)) {
			alert(`${newName} is already added to the phonebook`);
			setNewName("");
		} else if (persons.find(isNewPhone)) {
			alert(`${newPhone} is already added to the phonebook`);
			setNewPhone("");
		} else {
			addPersons();
			console.log(newName, "added");
		}
	};

	const addPersons = (event) => {
		const personObject = {
			key: persons.length + 1,
			name: newName,
			phone: newPhone,
		};
		setPersons(persons.concat(personObject));
		setNewName("");
		// console.log("button clicked", event.target);
	};

	const handleNameChange = (event) => {
		console.log(event.target.value);
		setNewName(event.target.value);
	};

	const handlePhoneChange = (event) => {
		console.log(event.target.value);
		setNewPhone(event.target.value);
	};

	return (
		<div>
			<div>debug: {newName}</div>
			<h2>Phonebook</h2>
			<form onSubmit={checkPersons}>
				<div>
					<label>Name: </label>
					<input value={newName} onChange={handleNameChange} />
					<br></br>
					<label>Phone: </label>
					<input value={newPhone} onChange={handlePhoneChange} />
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map((person) => (
				<p key="person.key">
					{person.name} {person.phone}
				</p>
			))}
		</div>
	);
};

export default App;
