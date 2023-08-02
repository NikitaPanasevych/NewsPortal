import { useVerifyEmailMutation } from '@/redux/features/authApiSlice';
import { emailSchema } from '@/shared/schemas/email.schema';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';

export default function useVerify() {
	const router = useRouter();
	const [verify, { isLoading, isError, error }] = useVerifyEmailMutation();

	const onSubmit = (values: any) => {
		verify({
			email: values.email,
		})
			.unwrap()
			.then((res) => {
				if (res.user_found) {
					router.push('/auth/login');
				}
			})
			.catch((err) => {
				if (!err.data.user_found) {
					router.push('/auth/register');
				}
			});
	};

	const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
		initialValues: {
			email: '',
		},
		validationSchema: emailSchema,
		onSubmit,
	});

	return {
		values,
		errors,
		touched,
		handleChange,
		handleSubmit,
		handleBlur,
		onSubmit,
		isLoading,
		isError,
		error,
	};
}
