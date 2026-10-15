import { createFileRoute } from '@tanstack/react-router';
import { Dashboard } from '@/components/finance/dashboard';
import { pageHead } from '@/components/finance/store';
export const Route=createFileRoute('/visao-geral')({head:()=>pageHead('Visão geral'),component:()=> <Dashboard/>});
