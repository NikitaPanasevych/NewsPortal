'use client';
import styles from './styles.module.scss';

import LoginForm from '@/components/forms/login-form';

export default function page() {
	return (
		<div className={styles.login}>
			<h1>Log in to your account</h1>
			<LoginForm />
		</div>
	);
}
