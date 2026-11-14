import {getDriverRepository} from '@/infrastructure/db';
export async function getDrivers(f?:any){return getDriverRepository().getAll(f);}
export async function getFeaturedDrivers(){const a=await getDriverRepository().getAll();return a.filter(d=>d.verified).slice(0,6);}
