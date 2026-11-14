import {getPropertyRepository} from '@/infrastructure/db';
export async function getApprovedProperties(){const a=await getPropertyRepository().getAll();return a.filter(p=>p.status==='approved');}
