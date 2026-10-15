import { createFileRoute } from '@tanstack/react-router';
import { Costs } from '@/components/finance/costs';
import { pageHead } from '@/components/finance/store';
export const Route=createFileRoute('/custos')({head:()=>pageHead('Apropriação de custos'),component:()=> <Costs/>});
