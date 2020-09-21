import React from 'react';
import './Person.css';
import PersonProps from './PersonProps';
import Radium from 'radium';

const PersonComp: React.FC<PersonProps> = (props) => {
	
	let hobbies = null;
	if(props.children) {
		hobbies = (
			<div>
				<div>Hobbies</div>
				<textarea 
					defaultValue={props.children?.valueOf().toString()} 
					onChange={props.onInputChange}
					rows={3}
					cols={80} />
			</div>
		);
	}
	
    return (
        <div className="Person">
            <div>
				<div>Name</div>
				<input className="person-name" defaultValue={props.name} onChange={props.onInputChange} />
			</div>
            <div>
				<div>Age</div>
            	<input type="text" defaultValue={props.age.toString()} onChange={props.onInputChange} />
			</div>
            {hobbies}
        </div>
    );
}

export default Radium(PersonComp);