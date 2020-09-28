import React from 'react';
import person from './Person.model';
import PersonItem from './PersonItem';

interface PersonListProps {
	people: Array<person>;
	onInputChange(value: number | string, mapper: (person: person) => string, personId: number): void
}

const PersonList: React.FC<PersonListProps> = (props) => {
    return (
		<>
		{
			props.people.map((person: person) => {
				return (
					<PersonItem 
						key={person.Id} 
						Name={person.Name}
						Age={person.Age}
						onInputChange={(value, mapper) => props.onInputChange(value, mapper, person.Id)}>
							{person.Hobbies}
					</PersonItem>
				);
			})
		}
		</>
    );
}

export default PersonList;