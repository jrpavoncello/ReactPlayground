import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import PersonListPresenter from '../components/Persons/PersonListPresenter';

const App: React.FC = () => {
	const initialPeople = [
		{
			Id: 1,
			Name: "Josh",
			Age: 27,
			Hobbies: "My hobbies include development, snowboarding, skateboarding, drums, guitar, gaming."
		},
		{
			Id: 2,
			Name: "Kiersten",
			Age: 28,
			Hobbies: ""
		},
		{
			Id: 3,
			Name: "YourMom",
			Age: 60,
			Hobbies: "Gaining weight."
		}
	]

	return (
		<div className="App">
			<h1>Henlo, fren.</h1>
			<PersonListPresenter people={initialPeople} />
		</div>
	);
};

export default App;
