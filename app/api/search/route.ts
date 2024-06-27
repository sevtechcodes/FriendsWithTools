import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma/db';

export async function GET (request: NextRequest) {
  const url = new URL(request.url);
  //not getting the URL
  console.log('URL',url);
  const query = url.searchParams.get('query');
  console.log('server query', query);

  try {
    const tools = await prisma.toolCard.findMany({
      where: {
        name: {
          contains: query || '',
          mode: 'insensitive',
        },
      },
      include: {
        reviews: true,
        owner: true,
      },
    });

    return NextResponse.json(tools);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch tools' },
      { status: 500 }
    );
  }
}
