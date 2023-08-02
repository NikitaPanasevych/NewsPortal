'use client';

import styles from './styles.module.scss';
import { RegisterForm } from '@/components/forms';

export default function page() {
	return (
		<div className={styles.login}>
			<h1>Create your free account</h1>
			<RegisterForm />
		</div>
	);
}
