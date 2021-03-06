import React from 'react';


const SubmissionForm = ({ item }) => {

	const componentName = item.customFields.componentName;

	const FormToRender = require(`../components/forms/${componentName}.jsx`).default;
	const moduleProps = {
		item: item
	}

	return (
		<FormToRender {...moduleProps} />
	);
}

export default SubmissionForm;
