import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useGetArticlesQuery } from '../redux/features/authApiSlice';

export default function Home() {
	return (
		<main>
			<h1 style={{ textAlign: 'center' }}>Hello</h1>
		</main>
	);
}
