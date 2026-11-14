import {MemoryDriverRepository,MemoryPropertyRepository,MemoryLeaderRepository} from './memory.adapter';
import {D1DriverRepository,D1PropertyRepository,D1LeaderRepository} from './d1.adapter';
import {PostgresDriverRepository,PostgresPropertyRepository,PostgresLeaderRepository} from './postgres.adapter';
// THE ONLY SWITCH - Change .env DB_TYPE only. Do NOT touch pages.
export function getDriverRepository(env:any=null){const t=process.env.DB_TYPE||'memory';if(t==='d1')return new D1DriverRepository(env?.DB);if(t==='postgres')return new PostgresDriverRepository(env?.prisma);return new MemoryDriverRepository();}
export function getPropertyRepository(env:any=null){const t=process.env.DB_TYPE||'memory';if(t==='d1')return new D1PropertyRepository(env?.DB);if(t==='postgres')return new PostgresPropertyRepository(env?.prisma);return new MemoryPropertyRepository();}
export function getLeaderRepository(env:any=null){const t=process.env.DB_TYPE||'memory';if(t==='d1')return new D1LeaderRepository(env?.DB);if(t==='postgres')return new PostgresLeaderRepository(env?.prisma);return new MemoryLeaderRepository();}
