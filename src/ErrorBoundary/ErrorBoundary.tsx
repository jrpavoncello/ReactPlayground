import React, { Component } from 'react';

interface ErrorBoundaryState {
	hasError: boolean;
	errorMessage: string;
}

class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
	constructor(props: {}) {
		super(props);
		this.state = { 
			hasError: false,
			errorMessage: ''
		};
	}
	componentDidCatch (error: any, info: any) {
		this.setState({hasError: true, errorMessage: error});
	}

	render() {
		if(this.state.hasError) {
			return <h1>{this.state.errorMessage}</h1>;
		}
		else {
			return this.props.children;
		}
	}
}

export default ErrorBoundary;