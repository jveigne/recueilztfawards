// app/ClientWrapper.tsx
'use client';

import { ReactNode } from 'react';
import { BooleanProvider } from '../../context/LanguageContext';


export default function ClientWrapper({ children }: { children: ReactNode }) {
    return <BooleanProvider>{children}</BooleanProvider>;
}
