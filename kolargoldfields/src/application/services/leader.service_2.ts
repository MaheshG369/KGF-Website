import {getLeaderRepository} from '@/infrastructure/db';
export async function getLeaders(){return getLeaderRepository().getAll();}
