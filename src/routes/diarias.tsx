import { createFileRoute } from '@tanstack/react-router';
import { Rates } from '@/components/finance/settings';
import { pageHead } from '@/components/finance/store';
export const Route=createFileRoute('/diarias')({head:()=>pageHead('Configuração de diárias'),component:()=> <Rates/>});
