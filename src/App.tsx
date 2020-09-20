import React, { useState, useEffect, ChangeEvent } from 'react';
import PersonComp from './components/PersonComp';
import './App.css';
import Person from './models/person.model'
import PersonInputComp from './components/PersonInputComp';
// import { Route } from 'react-router-dom';

type AppState = {
  people:Person[]
}

const App: React.FC = () => {
	let [state, setState] = useState({ people:Array<Person>() });

	const addPersonHandler = (person:Person) => {
		setState(previousState => { 
			return { people:[...previousState.people, person] };
		});
	};

	useEffect(() => {
		addPersonHandler({
			name: "Josh",
			age: 27,
			hobbies: "My hobbies include development, snowboarding, skateboarding, drums, guitar, gaming."
		});
	
		addPersonHandler({
			name: "Kiersten",
			age: 28,
			hobbies: ""
		});
	
		addPersonHandler({
			name: "YourMom",
			age: 60,
			hobbies: "Gaining weight."
		});
	}, [] /* run only once */)

	const onPersonChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const currentName = event.target.value;
		
	};
	
	return (
		<div className="App">
			<h1>Henlo, fren.</h1>
			<PersonInputComp onPersonAdded={addPersonHandler} />
			{
				state.people.map((person) => {
					return (
						<PersonComp key={person.name} name={person.name} age={person.age} onChange={onPersonChangedHandler}>{person.hobbies}</PersonComp>
					);
				})
			}
		</div>
	);
};

export default App;
