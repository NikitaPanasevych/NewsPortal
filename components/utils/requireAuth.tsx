'use client';

import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';
import Loader from '../common/loader';

export default function RequireAuth({ children }: { children: React.ReactNode }) {
    const { isLoading, isAuthenticated } = useAppSelector((state) => state.authReducer);
    const router = useRouter();
    console.log(isAuthenticated);

    if (isLoading) {
        return (
            <div>
                <Loader />
            </div>
        );
    }

    if (!isAuthenticated) {
        toast.error('You are not authenticated');
        router.push('/auth/enter-email');
    }

    return <>{children}</>;
}
