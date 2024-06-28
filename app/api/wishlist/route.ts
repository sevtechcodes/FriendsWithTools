import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma/db'; 
import { WishList } from '../../lib/types';

export async function GET (request: NextRequest) {
  try {
    const tools = await prisma.toolCard.findMany({where: {liked: true}});
    return NextResponse.json(tools);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch favorited tools' }, { status: 500 });
  }
}

export async function POST (request: NextRequest) { //?
  let favedTool = await request.json();
  console.log('before try favedTool', favedTool);
  console.log('favedTool id', favedTool.id);
  try {
    const wishlist: Partial<WishList> = await prisma.wishList.create({
      data: {
        ownerId: '85d0c4fe-439c-4adb-9343-1b8fdcb7c9e4',
        list: {
          connect: [{id: favedTool.id}]
        }
      },
    });
    console.log('favedTool', favedTool);
    return NextResponse.json(wishlist);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: `${error}` }, { status: 500 });
  }
}

