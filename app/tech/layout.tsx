import RequireAuth from '@/components/utils/requireAuth';
import React from 'react';

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return <RequireAuth>{children}</RequireAuth>;
}
