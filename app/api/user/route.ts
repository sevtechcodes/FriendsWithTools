import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma/db'; 

export async function GET (request: NextRequest) {
  try {
    const user = await prisma.user.findMany();
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch tools' }, { status: 500 });
  }
}
