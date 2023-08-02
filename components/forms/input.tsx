import React, { ChangeEvent } from 'react';

interface Props {
	value: string | undefined;
	label: string;
	type: string;
	readonly?: boolean | false;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	children: React.ReactNode;
}

export default function Input({ label, type, value, readonly, handleChange, children }: Props) {
	return (
		<>
			<label htmlFor={label}>{children}</label>
			<input readOnly={readonly} name={label} value={value} onChange={handleChange} type={type} />
		</>
	);
}
