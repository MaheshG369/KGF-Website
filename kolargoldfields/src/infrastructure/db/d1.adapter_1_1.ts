import type {IDriverRepository,IPropertyRepository,ILeaderRepository} from '@/domain/interfaces';
import {seedDrivers,seedProperties,seedLeaders} from './seed';
// D1 adapter - ONLY place with D1 code. Pages never import this directly. See README Step 4.
export class D1DriverRepository implements IDriverRepository{constructor(private db:any){}async getAll(f?:any){let l=[...seedDrivers];if(f?.area)l=l.filter(d=>d.area===f.area);if(f?.category)l=l.filter(d=>d.category===f.category);return l;}async getById(id:string){return seedDrivers.find(d=>d.id===id)||null;}async create(d:any){return {...d,id:String(Date.now())} as any;}}
export class D1PropertyRepository implements IPropertyRepository{constructor(private db:any){}async getAll(){return [...seedProperties];}async create(d:any){return {...d,id:String(Date.now())} as any;}}
export class D1LeaderRepository implements ILeaderRepository{constructor(private db:any){}async getAll(){return [...seedLeaders];}}
