'use client';

import { useRegister } from '@/hooks';
import React from 'react';
import Form from './form';

export default function RegisterForm() {
	const { values, errors, touched, handleChange, handleSubmit, isLoading, onSubmit } = useRegister();

	const config = [
		{
			value: values.email,
			label: 'email',
			type: 'text',
			readonly: true,
			handleChange: handleChange,
		},
		{
			value: values.password,
			label: 'password',
			type: 'password',
			readonly: false,
			handleChange: handleChange,
		},
	];

	return (
		<Form
			config={config}
			btnText="Register"
			isLoading={isLoading}
			handleSubmit={handleSubmit}
			handleChange={handleChange}
		/>
	);
}
