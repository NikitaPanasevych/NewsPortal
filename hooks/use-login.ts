import { useFormik } from 'formik';
import { useLoginMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';
import { setAuth } from '@/redux/features/authSlice';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';

export default function useLogin() {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const email = useSelector((state: any) => state.emailReducer.email);

	const [login, { isLoading, error, data }] = useLoginMutation();

	const onSubmit = (values: any) => {
		login({
			email: values.email,
			password: values.password,
		})
			.unwrap()
			.then((res) => {
				toast.success('Account logged successfully!');
				dispatch(setAuth());
				router.push('/');
			})
			.catch((err) => {
				toast.error('Something went wrong!');
				console.log(err);
			});
	};

	const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
		initialValues: {
			email,
			password: '',
		},
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
	};
}
