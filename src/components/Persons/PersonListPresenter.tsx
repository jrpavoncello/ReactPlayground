import React, { useState } from 'react';
import Person from './Person.model';
import PersonInput from './PersonInput';
import PersonList from './PersonList';

interface PersonListProps {
	people: Array<Person>;
}

const PersonListPresenter: React.FC<PersonListProps> = (props) => {
	let [state, setState] = useState({ people: props.people });

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

	const getCountPeople = () => state.people.length;
	
	return (
		<>
			<PersonInput onPersonAdded={addPersonHandler} getCountPeople={getCountPeople} />
			<PersonList
				people={state.people}
				onInputChange={onPersonChangedHandler}>
			</PersonList>
		</>
	);
};

export default PersonListPresenter;