import React from "react";
import "./PersonInput.css";
import { Form, Input, InputNumber, Button } from "antd";
import PersonInputProps from "./PersonInputProps";
import styled from "styled-components";

const PersonInputComp: React.FC<PersonInputProps> = (props) => {
	const onFinish = (values: { name: string; age: number }) => {
		props.onPersonAdded({
			Id: props.getCountPeople() + 1,
			Name: values.name,
			Age: values.age,
			Hobbies: "",
		});
	};

	return (
		<PersonInputDiv>
			<Form
				className="PersonInput"
				onFinish={onFinish}
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 16 }}
				layout="horizontal"
			>
				<Form.Item
					label="Name"
					name="name"
					fieldKey="name"
					rules={[
						{ required: true, message: "Please provide a name" },
						{
							pattern: /^[A-z ]+$/,
							message: "Please only use alpha characters",
						},
					]}
				>
					<StyledInput />
				</Form.Item>
				<Form.Item
					label="Age"
					name="age"
					fieldKey="age"
					wrapperCol={{ span: 5 }}
					rules={[
						{ required: true, message: "Please provide an age [0, 120]" },
						{ type: "number", min: 0, message: "Age must be greater than 0" },
						{ type: "number", max: 120, message: "Age must be less than 120" },
					]}
				>
					<InputNumber style={{float: 'left'}}/>
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 2, span: 8 }}>
					<StyledButton type="primary" htmlType="submit" style={{float: 'left'}}>
						Submit
					</StyledButton>
				</Form.Item>
			</Form>
		</PersonInputDiv>
	);
};

const PersonInputDiv = styled.div`
	width: 80%;
	margin: 16px auto;
	border: 1px solid #eee;
	box-shadow: 0 2px 3px #ccc;
	padding: 16px;
	text-align: center;

	@media (min-width: 575px) {
		width: 550px;
	}
`;

const StyledInput = styled(Input)`
	float: left;
	@media (max-width: 575px) {
		max-width: 100%;
		flex: 1 1;
	}
`;

const StyledButton = styled(Button)`
	background-color: green;
	color: white;
	font: inherit;
	border: 1px solid blue;
	padding: 8px;
	cursor: pointer;

	&:hover {
		background-color: lightgreen;
		color: black;
	}
`;

export default PersonInputComp;
