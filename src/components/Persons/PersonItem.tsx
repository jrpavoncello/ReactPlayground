import React from 'react';
import styled from 'styled-components';
import { Input, InputNumber } from "antd";
import './Person.css';
import { nameof } from '../../nameof';
import Person from './Person.model';

interface PersonItemProps {
    Name: string,
	Age: number,
	onInputChange(value: number | string, mapper: (person: Person) => string): void
}

const PersonItem: React.FC<PersonItemProps> = (props) => {
	
	const textareaStyle = {
		width: '100%'
	};

	let hobbies = null;
	if(props.children) {
		hobbies = (
			<div>
				<div>Hobbies</div>
				<textarea 
					defaultValue={props.children?.valueOf().toString()} 
					onChange={(event) => props.onInputChange(event.target.value, (person) => nameof<typeof person>("Hobbies"))}
					rows={3}
					style={textareaStyle} />
			</div>
		);
	}

    return (
		<PersonDiv>
            <div>
				<div>Name</div>
				<Input className="person-name" defaultValue={props.Name} onChange={(event) => props.onInputChange(event.target.value, (person) => nameof<typeof person>("Name"))} />
			</div>
            <div>
				<div>Age</div>
            	<InputNumber defaultValue={props.Age} onChange={(value) => props.onInputChange(value as number, (person) => nameof<typeof person>("Age"))} />
			</div>
            {hobbies}
		</PersonDiv>
    );
}

const PersonDiv = styled.div`
	width: 80%;
	margin: 16px auto;
	border: 1px solid #eee;
	box-shadow: 0 2px 3px #ccc;
	padding: 16px;
	text-align: left;

	@media (min-width: 575px) {
		width: 550px;
	}`;

export default PersonItem;