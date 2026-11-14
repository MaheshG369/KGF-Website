import type {IDriverRepository,IPropertyRepository,ILeaderRepository} from '@/domain/interfaces';
import {seedDrivers,seedProperties,seedLeaders} from './seed';
// Postgres adapter - same interface as D1. Change DB_TYPE=postgres to use it. Pages do NOT change.
export class PostgresDriverRepository implements IDriverRepository{constructor(private prisma:any){}async getAll(f?:any){let l=[...seedDrivers];if(f?.area)l=l.filter(d=>d.area===f.area);if(f?.category)l=l.filter(d=>d.category===f.category);return l;}async getById(id:string){return seedDrivers.find(d=>d.id===id)||null;}async create(d:any){return {...d,id:String(Date.now())} as any;}}
export class PostgresPropertyRepository implements IPropertyRepository{constructor(private prisma:any){}async getAll(){return [...seedProperties];}async create(d:any){return {...d,id:String(Date.now())} as any;}}
export class PostgresLeaderRepository implements ILeaderRepository{constructor(private prisma:any){}async getAll(){return [...seedLeaders];}}
