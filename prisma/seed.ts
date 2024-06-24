import { PrismaClient } from '@prisma/client';
import { User, ToolCard,ToolCategory, ToolsReviews, Conversation, Message } from "@/app/lib/types";

const prisma = new PrismaClient();

async function main() {
  // Create users
  const user1: User = await prisma.user.create({
    data: {
      name: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      profilePicture: 'https://example.com/profile-pic-john.jpg',
    },
  });

  const user2: User = await prisma.user.create({
    data: {
      name: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      password: 'password123',
      profilePicture: 'https://example.com/profile-pic-jane.jpg',
    },
  });

  // Create tool categories
  const category1: ToolCat = await prisma.toolCategory.create({
    data: {
      categoryName: 'Gardening',
    },
  });

  const category2 = await prisma.toolCategory.create({
    data: {
      categoryName: 'Construction',
    },
  });

  // Create tool cards
  const toolCard1 = await prisma.toolCard.create({
    data: {
      name: 'Lawn Mower',
      description: 'A powerful lawn mower for your gardening needs.',
      location: '123 Garden St.',
      dailyRate: 10,
      weeklyRate: 50,
      monthlyRate: 150,
      picture: 'https://example.com/lawn-mower.jpg',
      liked: true,
      available: true,
      owner: {
        connect: { id: user1.id },
      },
      ToolCategory: {
        connect: { id: category1.id },
      },
    },
  });

  const toolCard2 = await prisma.toolCard.create({
    data: {
      name: 'Hammer Drill',
      description: 'A heavy-duty hammer drill for construction projects.',
      location: '456 Construction Ave.',
      dailyRate: 20,
      weeklyRate: 100,
      monthlyRate: 300,
      picture: 'https://example.com/hammer-drill.jpg',
      liked: false,
      available: true,
      owner: {
        connect: { id: user2.id },
      },
      ToolCategory: {
        connect: { id: category2.id },
      },
    },
  });

  // Create tool reviews
  const review1 = await prisma.toolsReviews.create({
    data: {
      content: 'Great tool, very useful!',
      author: {
        connect: { id: user2.id },
      },
      toolCard: {
        connect: { id: toolCard1.id },
      },
    },
  });

  const review2 = await prisma.toolsReviews.create({
    data: {
      content: 'Worked perfectly for my project.',
      author: {
        connect: { id: user1.id },
      },
      toolCard: {
        connect: { id: toolCard2.id },
      },
    },
  });

  // Create a conversation
  const conversation = await prisma.conversation.create({
    data: {
      sender: {
        connect: { id: user1.id },
      },
    },
  });

  // Create messages
  await prisma.message.create({
    data: {
      content: 'Hi, is the lawn mower available for rent?',
      author: {
        connect: { id: user1.id },
      },
      conversation: {
        connect: { id: conversation.id },
      },
    },
  });

  await prisma.message.create({
    data: {
      content: 'Yes, it is available.',
      author: {
        connect: { id: user2.id },
      },
      conversation: {
        connect: { id: conversation.id },
      },
    },
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });