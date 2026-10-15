import { createFileRoute } from '@tanstack/react-router';
import { FieldForm } from '@/components/finance/field';
import { pageHead } from '@/components/finance/store';
export const Route=createFileRoute('/apontamento')({head:()=>pageHead('Apontamento de campo'),component:()=> <FieldForm/>});
