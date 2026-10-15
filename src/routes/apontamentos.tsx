import { createFileRoute } from '@tanstack/react-router';
import { Entries } from '@/components/finance/field';
import { pageHead } from '@/components/finance/store';
export const Route=createFileRoute('/apontamentos')({head:()=>pageHead('Apontamentos'),component:()=> <Entries/>});
