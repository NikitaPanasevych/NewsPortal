import PageWrapper from '@/components/common/wrapper';
import Link from 'next/link';

export default function Home() {
	return (
		<PageWrapper>
			<main>
				<h1 style={{ textAlign: 'center' }}>
					<Link href={'/tech'}>Hello</Link>
				</h1>
			</main>
		</PageWrapper>
	);
}
