import React, { ChangeEvent, FormEvent } from 'react';
import styles from '../../app/auth/register/styles.module.scss';
import Input from './input';

interface Config {
	value: string | undefined;
	label: string;
	type: string;
	readonly?: boolean | false;
}

interface Props {
	config: Config[];
	btnText: string;
	isLoading: boolean;
	handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Form({ handleSubmit, handleChange, btnText, config }: Props) {
	return (
		<form method="post" onSubmit={handleSubmit} autoComplete="off" className={styles.login_form}>
			<fieldset className={styles.login_form_field}>
				{config.map((item, index) => (
					<Input
						key={index}
						label={item.label}
						type={item.type}
						value={item.value}
						handleChange={handleChange}
						readonly={item.readonly}
					>
						{item.label}
					</Input>
				))}
			</fieldset>
			<div className={styles.login_form_terms}>
				<input id="checkbox" type="checkbox" />
				<label htmlFor="terms">I agree to the terms and conditions, that we don't have.</label>
			</div>
			<button type="submit">{btnText}</button>
		</form>
	);
}
