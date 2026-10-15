import { createFileRoute } from '@tanstack/react-router';
import { People } from '@/components/finance/people';
import { pageHead } from '@/components/finance/store';
export const Route=createFileRoute('/colaboradores')({head:()=>pageHead('Colaboradores'),component:()=> <People/>});
