import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
   email: Yup.string().email('Invalid email address').required('Required'),
   password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
   confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
});
