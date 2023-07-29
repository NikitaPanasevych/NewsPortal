'use client';

import { useFormik } from 'formik';
import { useState } from 'react';
import styles from './styles.module.scss';

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
      onSubmit,
   });

   return (
      <div className={styles.login}>
         <h1>Log in to your account</h1>
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
            <div className={styles.login_forgot}>
               <a href="/auth/forgot-password">Forgot your password?</a>
            </div>
            <button type="submit">Log In</button>
         </form>
      </div>
   );
}
