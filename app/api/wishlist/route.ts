import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma/db'; 

export async function GET (request: NextRequest) {
  try {
    const tools = await prisma.toolCard.findMany({where: {liked: true}});
    return NextResponse.json(tools);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch favorited tools' }, { status: 500 });
  }
}

