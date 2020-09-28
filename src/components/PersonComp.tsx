import React from 'react';
import styled from 'styled-components';
// import './Person.css';
import PersonProps from './PersonProps';

const PersonComp: React.FC<PersonProps> = (props) => {
	
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
					onChange={props.onInputChange}
					rows={3}
					style={textareaStyle} />
			</div>
		);
	}

    return (
		<PersonDiv>
            <div>
				<div>Name</div>
				<input className="person-name" defaultValue={props.Name} onChange={props.onInputChange} />
			</div>
            <div>
				<div>Age</div>
            	<input type="text" defaultValue={props.Age.toString()} onChange={props.onInputChange} />
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
	text-align: center;

	@media (min-width: 575px) {
		width: 550px;
	}`;

export default PersonComp;