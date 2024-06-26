import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma/db';

export async function GET (request: NextRequest) {
  try {
    const conversation = await prisma.conversation.findMany({include: {messages: true, sender: true}});
    return NextResponse.json(conversation);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch conversations' }, { status: 500 });
  }
}
