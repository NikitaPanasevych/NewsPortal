import { useVerify } from '@/hooks';
import React from 'react';
import Form from './form';

export default function enterEmailForm() {
	const { values, errors, touched, handleChange, handleSubmit, handleBlur, isLoading } = useVerify();

	const config = [
		{
			value: values.email,
			label: 'Email',
			type: 'text',
			readonly: false,
			handleChange: handleChange,
		},
	];

	return (
		<Form
			config={config}
			btnText="Continue"
			isLoading={isLoading}
			handleSubmit={handleSubmit}
			handleChange={handleChange}
		/>
	);
}
