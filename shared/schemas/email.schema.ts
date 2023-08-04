import * as Yup from 'yup';

export const emailSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Emai required'),
    checked: Yup.boolean().oneOf([true], 'You must accept the terms and conditions')
});
