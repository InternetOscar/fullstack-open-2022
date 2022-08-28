const App = () => {
	//Create the main React App
	const course = {
		// Create the "course" object
		id: 1,
		name: "Half Stack application development",
		parts: [
			// Create the sub-parts array for the "course" object
			{
				name: "Fundamentals of React",
				exercises: 10,
				id: 1,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
				id: 2,
			},
			{
				name: "State of a component",
				exercises: 14,
				id: 3,
			},
		],
	};

	const result = course.parts.map((parts) => parts.exercises); // map the parts of the course object
	// console.log(result);																				// Output the result to the console for debugging

	// The following snippet of code is from MDN
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
	// 0 + 1 + 2 + 3 + 4
	const initialValue = 0;
	const sumWithInitial = result.reduce(
		(previousValue, currentValue) => previousValue + currentValue,
		initialValue
	);

	console.log(sumWithInitial);
	// expected output: 31

	return (
		<>
			<h1>{course.name}</h1>
			<p>
				{course.parts[0].name} {course.parts[0].exercises}
			</p>
			<p>
				{course.parts[1].name} {course.parts[1].exercises}
			</p>
			<p>
				{course.parts[2].name} {course.parts[2].exercises}
			</p>
			<p>
				<strong>total of {sumWithInitial} exercises</strong>
			</p>
		</>
	);
};

export default App;
