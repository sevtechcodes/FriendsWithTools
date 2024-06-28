import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma/db'; 
import { WishList } from '../../lib/types';

export async function GET (request: NextRequest) {
  try {
    const wishList = await prisma.wishList.findUnique({where: {ownerId: '5d8ec93b-05e9-4132-bdc4-f9a1102c1db3'}});
    return NextResponse.json(wishList);
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
        ownerId: '5d8ec93b-05e9-4132-bdc4-f9a1102c1db3',
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

