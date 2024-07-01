import { v4 as uuidv4 } from 'uuid';
import { User, ToolCard, ToolCategory, ToolsReviews, Conversation, Message, ToolRequest } from '@/app/lib/types';
import prisma from './db';

async function main () {
  const users: User[] = [
    {
      id: uuidv4(),
      clerkId: 'user_2iYe6pC4iurhC3BfaFn5ROpfOZ6',
      username: 'Cool nickname',
      name: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      conversations: [],
      reviews: [],
      listings: [],
      messages: [],
      toolrequests: []
    },
    {
      id: uuidv4(),
      clerkId: 'user_5iYe6pC4lpghC3BfaFn5ROuiOZ6',
      username: 'Cool nickname2',
      name: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      conversations: [],
      reviews: [],
      listings: [],
      messages: [],
      toolrequests: []
    }
  ];

  const toolCategories: ToolCategory[] = [
    {
      id: uuidv4(),
      categoryName: 'Power Tools',
      tools: []
    },
    {
      id: uuidv4(),
      categoryName: 'Gardening Tools',
      tools: []
    }
  ];

  const toolCards: ToolCard[] = [
    {
      id: uuidv4(),
      name: 'Drill Machine',
      description: 'Powerful drilling tool for professional use.',
      location: 'Warehouse A',
      dailyRate: 20,
      weeklyRate: 100,
      monthlyRate: 300,
      picture: 'https://example.com/drill.jpg',
      liked: false,
      available: true,
      reviews: [],
      ownerId: users[0].id,
      toolCategoryId: toolCategories[0].id,
      toolrequests: [],
      wishlists: [],
    },
    {
      id: uuidv4(),
      name: 'Lawn Mower',
      description: 'Electric lawn mower for small to medium lawns.',
      location: 'Garden Shed',
      dailyRate: 15,
      weeklyRate: 70,
      monthlyRate: 200,
      picture: 'https://example.com/mower.jpg',
      liked: false,
      available: true,
      reviews: [],
      ownerId: users[1].id,
      toolCategoryId: toolCategories[1].id,
      toolrequests: [],
      wishlists: [],
    }
  ];

  const toolReviews: ToolsReviews[] = [
    {
      id: uuidv4(),
      authorId: users[0].id,
      content: 'Great drill, very powerful!',
      createdAt: new Date(),
      toolCardId: toolCards[0].id
    },
    {
      id: uuidv4(),
      authorId: users[1].id,
      content: 'Efficient lawn mower, easy to use.',
      createdAt: new Date(),
      toolCardId: toolCards[1].id
    }
  ];

  const conversations: Conversation[] = [
    {
      id: uuidv4(),
      messages: [],
      senderId: users[0].id,
      sender: users[0]
    },
    {
      id: uuidv4(),
      messages: [],
      senderId: users[1].id,
      sender: users[1]
    }
  ];

  const messages: Message[] = [
    {
      id: uuidv4(),
      content: 'Hello, I\'m interested in renting your drill.',
      createdAt: new Date(),
      authorId: users[1].id,
      author: users[1],
      conversationId: conversations[0].id,
      conversation: conversations[0]
    },
    {
      id: uuidv4(),
      content: 'Sure! When do you need it?',
      createdAt: new Date(),
      authorId: users[0].id,
      author: users[0],
      conversationId: conversations[0].id,
      conversation: conversations[0]
    }
  ];

  const toolrequests: ToolRequest[] = [
    {
      id: uuidv4(),
      status: 'pending',
      createdAt: new Date(),
      toolId: toolCards[0].id,
      userId: users[0].id,
    },
    {
      id: uuidv4(),
      status: 'accepted',
      createdAt: new Date(),
      toolId: toolCards[1].id,
      userId: users[0].id,
    },
    {
      id: uuidv4(),
      status: 'declined',
      createdAt: new Date(),
      toolId: toolCards[0].id,
      userId: users[0].id,
    },
  ];

  for (const user of users) {
    await prisma.user.create({
      data: {
        id: user.id,
        clerkId: user.clerkId,
        username: user.username,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
      }
    });
  }
  
  for (const category of toolCategories) {
    await prisma.toolCategory.create({
      data: {
        id: category.id,
        categoryName: category.categoryName,
        tools: {
          createMany: {
            data: category.tools.map(tool => ({
              id: tool.id,
              name: tool.name,
              description: tool.description,
              location: tool.location,
              dailyRate: tool.dailyRate,
              weeklyRate: tool.weeklyRate,
              monthlyRate: tool.monthlyRate,
              picture: tool.picture,
              liked: tool.liked,
              available: tool.available,
              ownerId: tool.ownerId,
              toolCategoryId: tool.toolCategoryId
            }))
          }
        }
      }
    });
  }

  for (const tool of toolCards) {
    await prisma.toolCard.create({
      data: {
        id: tool.id,
        name: tool.name,
        description: tool.description,
        location: tool.location,
        dailyRate: tool.dailyRate,
        weeklyRate: tool.weeklyRate,
        monthlyRate: tool.monthlyRate,
        picture: tool.picture,
        liked: tool.liked,
        available: tool.available,
        ownerId: tool.ownerId,
        toolCategoryId: tool.toolCategoryId,
        reviews: {
          createMany: {
            data: tool.reviews.map(review => ({
              id: review.id,
              content: review.content,
              createdAt: review.createdAt,
              authorId: review.authorId,
              toolCardId: review.toolCardId
            }))
          }
        }
      }
    });
  }

  for (const review of toolReviews) {
    await prisma.toolsReviews.create({
      data: {
        id: review.id,
        content: review.content,
        createdAt: review.createdAt,
        authorId: review.authorId,
        toolCardId: review.toolCardId
      }
    });
  }

  for (const conversation of conversations) {
    await prisma.conversation.create({
      data: {
        id: conversation.id,
        messages: {
          createMany: {
            data: conversation.messages?.map(message => ({
              id: message.id,
              content: message.content,
              createdAt: message.createdAt,
              authorId: message.authorId,
              conversationId: message.conversationId
            })) || []
          }
        },
        senderId: conversation.senderId
      }
    });
  }

  for (const message of messages) {
    await prisma.message.create({
      data: {
        id: message.id,
        content: message.content,
        createdAt: message.createdAt,
        authorId: message.authorId,
        conversationId: message.conversationId
      }
    });
  }

  for (const toolrequest of toolrequests) {
    await prisma.toolRequest.create({
      data: {
        id: toolrequest.id,
        status: toolrequest.status,
        createdAt: toolrequest.createdAt,
        toolId: toolrequest.toolId,
        userId: toolrequest.userId
      }
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

