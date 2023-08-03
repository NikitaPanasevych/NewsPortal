'use client';
import styles from './styles.module.scss';

import LoginForm from '@/components/forms/login-form';
import PageWrapper from '@/components/common/wrapper';

export default function page() {
	return (
		<PageWrapper>
			<div className={styles.login}>
				<h1>Log in to your account</h1>
				<LoginForm />
			</div>
		</PageWrapper>
	);
}
