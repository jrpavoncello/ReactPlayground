import { ChangeEvent } from "react";

interface PersonProps {
    name: string,
	age: number,
	onInputChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export default PersonProps;