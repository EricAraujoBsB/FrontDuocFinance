import { createFileRoute } from '@tanstack/react-router';
import { Closing } from '@/components/finance/closing';
import { pageHead } from '@/components/finance/store';
export const Route=createFileRoute('/fechamento')({head:()=>pageHead('Fechamento mensal'),component:()=> <Closing/>});
