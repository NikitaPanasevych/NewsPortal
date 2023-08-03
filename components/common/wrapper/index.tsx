'use client';

import { motion, transform } from 'framer-motion';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
	const variants = {
		out: {
			opacity: 0,
			scale: 0.95,
		},
		in: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: [0.43, 0.13, 0.23, 0.96],
			},
		},
	};

	return (
		<div style={{ overflow: 'hidden' }}>
			<motion.div variants={variants} animate="in" initial="out">
				{children}
			</motion.div>
		</div>
	);
}
