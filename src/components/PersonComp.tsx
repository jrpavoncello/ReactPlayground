import React from 'react';
import './Person.css';
import PersonProps from './PersonProps';

const PersonComp: React.FC<PersonProps> = (props) => {
    return (
        <div className="Person">
            <input className="person-name" value={props.name} onChange={props.onChange} />
            <input type="text" value={props.age} onChange={props.onChange} />
            <input style={props.children ? {} : {visibility:"collapse"}} value={props.children?.valueOf().toString()} onChange={props.onChange} />
        </div>
    );
}

export default PersonComp;