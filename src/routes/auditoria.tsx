import { createFileRoute } from '@tanstack/react-router';
import { Audit } from '@/components/finance/settings';
import { pageHead } from '@/components/finance/store';
export const Route=createFileRoute('/auditoria')({head:()=>pageHead('Trilha de auditoria'),component:()=> <Audit/>});
