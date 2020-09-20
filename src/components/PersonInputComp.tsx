import React from 'react';
import './PersonInput.css';
import {Form, Input, InputNumber, Button} from 'antd';
import PersonInputProps from './PersonInputProps';

const PersonInputComp: React.FC<PersonInputProps> = (props) => {

	const onFinish = (values: {name: string, age: number}) => {
		props.onPersonAdded({ 
			...values,
			hobbies:''
		});
	};
	  
    return (
		<Form 
			className="PersonInput"
			onFinish={onFinish}>
			<Form.Item 
				label="Name" 
				name="name"
				fieldKey="name"
				rules={
					[{ required: true, message: 'Please provide a name'},
					{pattern: /^[A-z ]+$/, message: 'Please only use alpha characters'}]
				}><Input /></Form.Item>
			<Form.Item 
				label="Age" 
				name="age"
				fieldKey="age"
				rules={
					[{ required: true, message: 'Please provide an age [0, 120]'},
					{ type: 'number', min: 0, message: 'Age must be greater than 0' },
					{ type: 'number', max: 120, message: 'Age must be less than 120' }]
				}><InputNumber /></Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">Submit</Button>
			</Form.Item>
        </Form>
    );
}

export default PersonInputComp;