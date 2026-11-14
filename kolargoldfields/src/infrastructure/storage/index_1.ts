import type {IStorage} from '@/domain/interfaces';
class MemoryStorage implements IStorage{async upload(){return 'https://placehold.co/600x400?text=KGF';}async delete(){}} 
class R2Storage implements IStorage{constructor(private b:any){}async upload(f:any,k:string){return `https://r2/${k}`;}async delete(){}} 
export function getStorage(env:any=null):IStorage{if(process.env.STORAGE_TYPE==='r2')return new R2Storage(env?.IMAGES);return new MemoryStorage();}
