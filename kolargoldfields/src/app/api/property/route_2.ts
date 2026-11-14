import {NextResponse} from 'next/server';
import {getApprovedProperties} from '@/application/services/property.service';
export async function GET(){return NextResponse.json(await getApprovedProperties());}
