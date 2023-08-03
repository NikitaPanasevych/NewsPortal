import { ImSpinner8 } from 'react-icons/im';
import styles from './styles.module.scss';

export default function Spinner() {
	return (
		<div role="status">
			<ImSpinner8 className={styles.spinner} />
		</div>
	);
}
