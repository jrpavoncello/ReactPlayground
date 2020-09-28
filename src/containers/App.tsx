import React, { useState, useEffect } from 'react';
import './App.css';
import PersonInput from '../components/Persons/PersonInput';
import PersonList from '../components/Persons/PersonList';
import Person from '../components/Persons/Person.model';
import 'antd/dist/antd.css';

const App: React.FC = () => {
	let [state, setState] = useState({ people:Array<Person>() });

	const addPersonHandler = (person:Person) => {
		setState(previousState => { 
			return { people:[...previousState.people, person] };
		});
	};

	const onPersonChangedHandler = (value: number | string, mapper: (person: Person) => string, personId: number) => {
		const personChanging = state.people.find(p => p.Id === personId) as any;
		if(personChanging) {
			personChanging[mapper(personChanging)] = value;
		}
	};

	useEffect(() => {
		addPersonHandler({
			Id: 1,
			Name: "Josh",
			Age: 27,
			Hobbies: "My hobbies include development, snowboarding, skateboarding, drums, guitar, gaming."
		});
	
		addPersonHandler({
			Id: 2,
			Name: "Kiersten",
			Age: 28,
			Hobbies: ""
		});
	
		addPersonHandler({
			Id: 3,
			Name: "YourMom",
			Age: 60,
			Hobbies: "Gaining weight."
		});
	}, [] /* run only once */)

	const getCountPeople = () => state.people.length;
	
	return (
		<div className="App">
			<h1>Henlo, fren.</h1>
			<PersonInput onPersonAdded={addPersonHandler} getCountPeople={getCountPeople} />
			<PersonList
				people={state.people}
				onInputChange={onPersonChangedHandler}>
			</PersonList>
		</div>
	);
};

export default App;
