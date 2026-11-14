import type {IDriverRepository,IPropertyRepository,ILeaderRepository,Driver,Property} from '@/domain/interfaces';
import {seedDrivers,seedProperties,seedLeaders} from './seed';
export class MemoryDriverRepository implements IDriverRepository{async getAll(f?:any){let l=[...seedDrivers];if(f?.area)l=l.filter(d=>d.area===f.area);if(f?.category)l=l.filter(d=>d.category===f.category);return l;}async getById(id:string){return seedDrivers.find(d=>d.id===id)||null;}async create(d:any){const n={...d,id:String(Date.now())} as Driver;seedDrivers.push(n);return n;}}
export class MemoryPropertyRepository implements IPropertyRepository{async getAll(){return [...seedProperties];}async create(d:any){const n={...d,id:String(Date.now())} as Property;seedProperties.push(n);return n;}}
export class MemoryLeaderRepository implements ILeaderRepository{async getAll(){return [...seedLeaders];}}
