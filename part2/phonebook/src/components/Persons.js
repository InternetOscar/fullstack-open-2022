const Persons = ({ person }) => {
	return <p key={person.id}>{person.content}</p>;
};

export default Persons;
