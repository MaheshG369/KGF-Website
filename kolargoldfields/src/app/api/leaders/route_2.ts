import {NextResponse} from 'next/server';
import {getLeaders} from '@/application/services/leader.service';
export async function GET(){return NextResponse.json(await getLeaders());}
