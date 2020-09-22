import { ChangeEvent } from "react";

interface PersonProps {
    Name: string,
	Age: number,
	onInputChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export default PersonProps;