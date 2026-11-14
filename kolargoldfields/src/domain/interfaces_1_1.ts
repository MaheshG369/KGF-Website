export interface Driver{id:string;name:string;phone:string;whatsapp?:string;area:string;vehicleType:string;category:'cab'|'auto'|'shifting';languages:string;services:string;verified:boolean;rating:number;isFeatured:boolean;}
export interface Property{id:string;title:string;category:string;area:string;price:number;bedrooms?:number;photos:string;name:string;phone:string;description:string;status:string;isFeatured:boolean;}
export interface Leader{id:string;name:string;role:string;party?:string;wardNo?:number;wardName?:string;areaCovered?:string;photoUrl?:string;officePhone?:string;officeAddress?:string;term?:string;}
export interface IDriverRepository{getAll(filters?:{area?:string;category?:string}):Promise<Driver[]>;getById(id:string):Promise<Driver|null>;create(data:Omit<Driver,'id'>):Promise<Driver>;}
export interface IPropertyRepository{getAll():Promise<Property[]>;create(data:Omit<Property,'id'>):Promise<Property>;}
export interface ILeaderRepository{getAll():Promise<Leader[]>;}
export interface IStorage{upload(file:any,key:string):Promise<string>;}
