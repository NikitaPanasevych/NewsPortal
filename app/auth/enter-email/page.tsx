'use client';

import { emailSchema } from '@/shared/schemas/email.schema';
import { useFormik } from 'formik';
import styles from './styles.module.scss';

const onSubmit = (values: any) => {
   console.log(values);
};

export default function EnterEmail() {
   const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
      initialValues: {
         email: '',
      },
      validationSchema: emailSchema,
      onSubmit,
   });

   return (
      <div className={styles.email}>
         <h1>Log in or create an account</h1>
         <form method="post" onSubmit={handleSubmit} autoComplete="off" className={styles.email_form}>
            <fieldset className={styles.email_form_field}>
               <label htmlFor="email">Email Address</label>
               <input name="email" value={values.email} onBlur={handleBlur} onChange={handleChange} type="text" />
               {errors.email && touched.email ? <span>{errors.email}</span> : null}
            </fieldset>
            <button type="submit">Continue</button>
         </form>
         <div className={styles.email_divider}>
            <span>or</span>
         </div>
         <div className={styles.email_terms}>
            <p>
               By continuing, you agree to the updated Terms of Sale, Terms of Service, and Privacy Policy, that we
               don't have ;)
            </p>
         </div>
         <div className={styles.email_buttons}>
            <button>
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 18 18">
                     <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.64 9.20468C17.64 8.5665 17.5827 7.95286 17.4764 7.36377H9V10.8451H13.8436C13.635 11.9701 13.0009 12.9233 12.0477 13.5615V15.8197H14.9564C16.6582 14.2529 17.64 11.9456 17.64 9.20468Z"
                        fill="#4285F4"
                     ></path>
                     <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z"
                        fill="#34A853"
                     ></path>
                     <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.96409 10.7098C3.78409 10.1698 3.68182 9.59301 3.68182 8.99983C3.68182 8.40664 3.78409 7.82983 3.96409 7.28983V4.95801H0.957273C0.347727 6.17301 0 7.54755 0 8.99983C0 10.4521 0.347727 11.8266 0.957273 13.0416L3.96409 10.7098Z"
                        fill="#FBBC05"
                     ></path>
                     <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z"
                        fill="#EA4335"
                     ></path>
                  </svg>
               </span>
               <span>Continue with Google</span>
            </button>
            <button>
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24">
                     <path
                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                        fill="#1977F3"
                     ></path>
                     <path
                        d="M15.5033 14.603L15.902 12.0009H13.4061V10.3125C13.4061 9.60123 13.7542 8.9064 14.873 8.9064H16.0083V6.69155C16.0083 6.69155 14.9781 6.51562 13.9934 6.51562C11.938 6.51562 10.5939 7.761 10.5939 10.0176V12.0009H8.30811V14.603H10.5939V20.8919C11.052 20.964 11.5216 21.0007 12 21.0007C12.4784 21.0007 12.948 20.9628 13.4061 20.8919V14.603H15.5033Z"
                        fill="white"
                     ></path>
                  </svg>
               </span>
               <span>Continue with Facebook</span>
            </button>
            <button>
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 13 18">
                     <path
                        d="M12.1681 12.0499C11.9449 12.5565 11.6808 13.0228 11.3748 13.4515C10.9577 14.036 10.6161 14.4405 10.3529 14.6652C9.94486 15.0339 9.50768 15.2228 9.03954 15.2335C8.70346 15.2335 8.29816 15.1396 7.82638 14.9489C7.35304 14.7592 6.91805 14.6652 6.52031 14.6652C6.10317 14.6652 5.65579 14.7592 5.17727 14.9489C4.69801 15.1396 4.31193 15.2389 4.01674 15.2488C3.56782 15.2676 3.12035 15.0733 2.6737 14.6652C2.38862 14.4208 2.03205 14.002 1.60489 13.4086C1.14659 12.7749 0.769795 12.0401 0.47461 11.2023C0.158477 10.2974 0 9.42119 0 8.57287C0 7.60113 0.21367 6.76302 0.641648 6.06069C0.978001 5.49655 1.42547 5.05154 1.98551 4.72485C2.54555 4.39816 3.15068 4.23169 3.80235 4.22104C4.15892 4.22104 4.62651 4.32942 5.2076 4.54244C5.78704 4.75618 6.15909 4.86457 6.32221 4.86457C6.44417 4.86457 6.85748 4.73783 7.55815 4.48516C8.22075 4.25084 8.77997 4.15382 9.23809 4.19204C10.4795 4.29049 11.4121 4.77139 12.0324 5.63779C10.9221 6.29886 10.3729 7.22477 10.3839 8.41257C10.3939 9.33777 10.7354 10.1077 11.4067 10.719C11.7109 11.0027 12.0506 11.222 12.4286 11.3777C12.3466 11.6113 12.2601 11.8351 12.1681 12.0499ZM9.32097 1.04008C9.32097 1.76525 9.05138 2.44233 8.51402 3.06904C7.86554 3.81406 7.08117 4.24457 6.23059 4.17664C6.21975 4.08964 6.21347 3.99808 6.21347 3.90187C6.21347 3.20571 6.52186 2.46068 7.06951 1.85152C7.34293 1.54309 7.69067 1.28664 8.11236 1.08206C8.53314 0.880533 8.93116 0.769085 9.30549 0.75C9.31642 0.846943 9.32097 0.943893 9.32097 1.04007V1.04008Z"
                        fill="black"
                     ></path>
                  </svg>
               </span>
               <span>Continue with Apple</span>
            </button>
         </div>
      </div>
   );
}
