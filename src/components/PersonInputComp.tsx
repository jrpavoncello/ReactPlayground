import React from 'react';
import './PersonInput.css';
import {Form, Input, InputNumber, Button} from 'antd';
import PersonInputProps from './PersonInputProps';
import Radium from 'radium';

const layout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 8 },
};

const tailLayout = {
	wrapperCol: { offset: 4, span: 4 },
};

const PersonInputComp: React.FC<PersonInputProps> = (props) => {

	const onFinish = (values: {name: string, age: number}) => {
		props.onPersonAdded({
			Id: props.getCountPeople() + 1,
			Name: values.name,
			Age: values.age,
			Hobbies: ''
		});
	};
	  
    return (
		<Form 
			{...layout}
			className="PersonInput"
			onFinish={onFinish}>
			<Form.Item 
				{...layout}
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
			<Form.Item {...tailLayout}>
				<Button type="primary" htmlType="submit">Submit</Button>
			</Form.Item>
		</Form>
    );
}

export default Radium(PersonInputComp);