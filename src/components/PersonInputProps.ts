import Person from "../models/person.model";

interface PersonInputProps {
	onPersonAdded: (person: Person) => void;
	getCountPeople: () => number;
}

export default PersonInputProps;