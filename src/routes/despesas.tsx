import { createFileRoute } from '@tanstack/react-router';
import { Expenses } from '@/components/finance/expenses';
import { pageHead } from '@/components/finance/store';
export const Route=createFileRoute('/despesas')({head:()=>pageHead('Reembolsos e adiantamentos'),component:()=> <Expenses/>});
