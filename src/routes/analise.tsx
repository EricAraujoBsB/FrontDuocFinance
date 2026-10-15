import { createFileRoute } from '@tanstack/react-router';
import { Dashboard } from '@/components/finance/dashboard';
import { pageHead } from '@/components/finance/store';
export const Route=createFileRoute('/analise')({head:()=>pageHead('Análise de custos'),component:()=> <Dashboard analytic/>});
