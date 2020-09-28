import Person from "../models/person.model";

interface PersonProps {
    Name: string,
	Age: number,
	onInputChange(value: number | string, mapper: (person: Person) => string): void
}

export default PersonProps;