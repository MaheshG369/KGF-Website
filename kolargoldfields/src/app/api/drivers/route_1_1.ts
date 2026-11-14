import {NextResponse} from 'next/server';
import {getDrivers} from '@/application/services/driver.service';
export async function GET(req:Request){const u=new URL(req.url);return NextResponse.json(await getDrivers({area:u.searchParams.get('area')||undefined,category:u.searchParams.get('category')||undefined}));}
