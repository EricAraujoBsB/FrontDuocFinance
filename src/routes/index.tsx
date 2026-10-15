import { createFileRoute } from '@tanstack/react-router';
import { Login } from '@/components/finance/login';
import { pageHead } from '@/components/finance/store';
export const Route=createFileRoute('/')({head:()=>pageHead('Acesso'),component:Login});
