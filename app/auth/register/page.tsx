'use client';

import styles from './styles.module.scss';
import { registerSchema } from '@/shared/schemas/register.schema';
import { useFormik } from 'formik';
import { useState } from 'react';

const onSubmit = (values: any) => {
   console.log(values);
};

export default function page() {
   const [password, setPassword] = useState('password');
   const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
      initialValues: {
         email: 'example@gmail.com',
         password: '',
      },
      validationSchema: registerSchema,
      onSubmit,
   });

   return (
      <div className={styles.login}>
         <h1>Create your free account</h1>
         <form method="post" onSubmit={handleSubmit} autoComplete="off" className={styles.login_form}>
            <fieldset className={styles.login_form_field}>
               <label htmlFor="email">Email Address</label>
               <input name="email" readOnly value={values.email} type="text" />
               <label htmlFor="password">Password</label>
               <input
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="password"
                  type={password}
               />
            </fieldset>
            <div className={styles.login_form_terms}>
               <input id="checkbox" type="checkbox" />
               <label htmlFor="terms">I agree to the terms and conditions, that we don't have.</label>
            </div>

            <button type="submit">Register</button>
         </form>
      </div>
   );
}
