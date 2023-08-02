import { useLogin } from '@/hooks';
import Form from './form';

export default function LoginForm() {
	const { values, errors, touched, handleChange, handleSubmit, isLoading } = useLogin();

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
			btnText="Log in"
			isLoading={isLoading}
			handleSubmit={handleSubmit}
			handleChange={handleChange}
		/>
	);
}
