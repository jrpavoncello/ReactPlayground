import { ChangeEvent } from "react";

interface PersonProps {
    name: string,
	age: number,
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default PersonProps;