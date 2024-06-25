import prisma from '../../prisma/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("method", req.method);
  try {
    console.log("Fetching tools...");
    const tools = await prisma.toolCard.findMany();
    console.log("Tools fetched:", tools);
    console.log("Res", res);
    res.status(200).json({tools});
  } catch (error) {
    console.error("Error fetching tools:", error);
    res.status(500).json({ message: 'Failed to fetch tools', error});
  }
}


// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const users = await prisma.user.findMany();
//   res.status(200).json(users);
// }




// import { ToolCard } from '../../lib/types';

// type ToolCard = {
//   id: string;
//   name: string;
//   description: string;
//   location: string;
//   dailyRate: number;
//   weeklyRate: number;
//   monthlyRate: number;
//   picture: string | null; // Adjusted to allow null, if picture can be nullable
//   liked: boolean;
//   available: boolean;
//   // reviews: []; // Assuming ToolReview is defined elsewhere
//   ownerId: string;
//   toolCategoryId: string;
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse<ToolCard[]>) {
//   if (req.method === 'GET') {
//       try {
//           const tools = await prisma.toolCard.findMany(); // Fetch tools data from Prisma
//           res.status(200).json(tools); // Respond with tools data as JSON
//       } catch (error) {
//           console.error('Error fetching tools:', error);
//           res.status(500).json({ error: 'Failed to fetch tools' });
//       }
//   } else {
//       res.setHeader('Allow', ['GET']);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     try {
//       const tools = await prisma.toolCard.findMany();
//       res.status(200).json(tools);
//     } catch (error) {
//       console.error('Error fetching tools:', error);
//       res.status(500).json({ error: 'Error fetching tools' });
//     }

// }


// if (req.method === 'GET') {
//     try {
//       const tools = await prisma.toolCard.findMany();
//       res.status(200).json(tools);
//     } catch (error) {
//       console.error('Error fetching tools:', error);
//       res.status(500).json({ error: 'Error fetching tools' });
//     }
//   } else {
//     res.setHeader('Allow', ['GET']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// import prisma from '@/prisma/db'; // Ensure correct path to your Prisma client instance

// export default async function handler(req: any, res: any) {
//   try {
//     const tools = await prisma.toolCard.findMany(); // Fetch all tool cards from database
//     res.status(200).json(tools);
//   } catch (error) {
//     console.error('Error fetching tools:', error);
//     res.status(500).json({ error: 'Failed to fetch tools' });
//   }
// }

// import axios from 'axios';

// export const fetchTools = async () => {
//     try {
//         const response = await axios.get('/api/tools');
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching tools:', error);
//         throw error;
//     }
// };