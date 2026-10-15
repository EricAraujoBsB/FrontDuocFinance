import { createFileRoute } from '@tanstack/react-router';
import { Roles } from '@/components/finance/settings';
import { pageHead } from '@/components/finance/store';
export const Route=createFileRoute('/perfis')({head:()=>pageHead('Perfis e permissões'),component:()=> <Roles/>});
