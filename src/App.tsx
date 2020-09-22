import React, { useState, useEffect, ChangeEvent } from 'react';
import PersonComp from './components/PersonComp';
import './App.css';
import Person from './models/person.model'
import PersonInputComp from './components/PersonInputComp';
import Radium from 'radium';
import 'antd/dist/antd.css'
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

	const onPersonChangedHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, personId: number) => {
		const personChanging = state.people.find(p => p.Id === personId);
		if(personChanging) {
			personChanging.Name = event.target.value;
		}
	};

	const getCountPeople = () => state.people.length;
	
	return (
		<div className="App">
			<h1>Henlo, fren.</h1>
			<PersonInputComp onPersonAdded={addPersonHandler} getCountPeople={getCountPeople} />
			{
				state.people.map((person) => {
					return (
						<PersonComp 
							key={person.Id} 
							Name={person.Name}
							Age={person.Age}
							onInputChange={(event) => onPersonChangedHandler(event, person.Id)}>
								{person.Hobbies}
						</PersonComp>
					);
				})
			}
		</div>
	);
};

export default Radium(App);
