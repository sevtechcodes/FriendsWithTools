import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  
  if (!userId) {
    return NextResponse.json({ error: 'userId is required' }, { status: 400 });
  }

  try {
    const requests = await prisma.request.findMany({
      where: {
        userId: userId,
      },
    });
    console.log('hello here', requests)

    return NextResponse.json(requests, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch requests:', error);
    return NextResponse.json({ error: 'Failed to fetch requests' }, { status: 500 });
  }
}
