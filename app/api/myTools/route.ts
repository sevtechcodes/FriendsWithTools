import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma/db'; 

export async function GET (request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const ownerId = searchParams.get('ownerId');

    if (!ownerId) {
      return NextResponse.json({ error: 'ownerId query parameter is required' }, { status: 400 });
    }

    const tools = await prisma.toolCard.findMany({
      where: {
        ownerId: ownerId,
      },
      include: {
        owner: true, // 
        ToolCategory: true, // 
        reviews: true, // 
      },
    });

    return NextResponse.json(tools);
  } catch (error) {
    console.error('Error fetching tools:', error);
    return NextResponse.json({ error: 'Failed to fetch tools' }, { status: 500 });
  }
}
