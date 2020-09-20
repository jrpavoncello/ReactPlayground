import Person from "../models/person.model";

interface PersonInputProps {
	onPersonAdded: (person: Person) => void;
}

export default PersonInputProps;