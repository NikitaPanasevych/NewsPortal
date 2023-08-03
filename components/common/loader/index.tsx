'use client';

import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { MoonLoader } from 'react-spinners';
import styles from './styles.module.scss';

export default function Loader() {
	const loading = /*useSelector((state: RootState) => state.authReducer.isLoading)*/ false;

	if (!loading) return null;

	return (
		<div className={styles.loading}>
			<MoonLoader color="#36d7b7" loading={loading} />;
		</div>
	);
}
