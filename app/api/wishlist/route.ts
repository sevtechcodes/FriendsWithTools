import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma/db'; 
import { WishList } from '../../lib/types';


export async function GET (request: NextRequest) {
  console.log('hello');
  
  try {
    const wishList: WishList= await prisma.wishList.findFirst({ where: { ownerId: process.env.CURRENT_USERID }, include: {list: true} });
    console.log('wishlist in GET', wishList);
    
    return NextResponse.json(wishList.list);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch favorited tools' }, { status: 500 });
  }
}

export async function POST (request: NextRequest) { //?
  let favedTool = await request.json();
  
  console.log('rfdgfsgsdf', favedTool.liked);

  try {
    const wishlist: Partial<WishList> = await prisma.wishList.upsert({
      where: {
        ownerId: process.env.CURRENT_USERID,
      },
      update: {
        list: {
          ...!favedTool.liked ? { disconnect: [{ id: favedTool.id }] }
            :
            { connect: [{ id: favedTool.id }] }
        }
      },
      create: {
        ownerId: process.env.CURRENT_USERID,
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

