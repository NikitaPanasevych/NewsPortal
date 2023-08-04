import { useVerifyEmail } from '@/hooks';
import React from 'react';
import Form from './form';

export default function enterEmailForm() {
	const { values, errors, touched, handleChange, handleSubmit, handleBlur, isLoading } = useVerifyEmail();

	const config = [
		{
			value: values.email,
			label: 'email',
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
			handleBlur={handleBlur}
			errors={errors}
			touched={touched}
		/>
	);
}
