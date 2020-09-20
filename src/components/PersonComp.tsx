import React from 'react';
import './Person.css';
import PersonProps from './PersonProps';

const PersonComp: React.FC<PersonProps> = (props) => {
    return (
        <div className="Person">
            <input className="person-name" defaultValue={props.name} onChange={props.onChange} />
            <input type="text" defaultValue={props.age.toString()} onChange={props.onChange} />
            <input style={props.children ? {} : {visibility:"collapse"}} defaultValue={props.children?.valueOf().toString()} onChange={props.onChange} />
        </div>
    );
}

export default PersonComp;