import { useRegisterMutation } from '@/redux/features/authApiSlice';
import { registerSchema } from '@/shared/schemas/register.schema';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

export default function useRegister() {
	const [register, { isLoading, isError, error }] = useRegisterMutation();

	const onSubmit = (values: any) => {
		register({
			email: values.email,
			password: values.password,
		})
			.unwrap()
			.then((res) => {
				toast.success('Account created successfully!');
			})
			.catch((err) => {
				toast.error('Something went wrong!');
				console.log(err);
			});
	};

	const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
		initialValues: {
			email: 'example@gmail.com',
			password: '',
		},
		validationSchema: registerSchema,
		onSubmit,
	});

	return {
		values,
		errors,
		touched,
		handleChange,
		handleSubmit,
		handleBlur,
		isLoading,
		onSubmit,
	};
}
