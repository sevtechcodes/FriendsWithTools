// components/Test.tsx

import React from 'react';
import { ToolCard } from '../lib/types';
// type ToolCard = {
//   id: string;
//   name: string;
//   description: string;
//   location: string;
//   dailyRate: number;
//   weeklyRate: number;
//   monthlyRate: number;
//   picture: string | null; 
//   liked: boolean;
//   available: boolean;
//   // reviews: []; 
//   ownerId: string;
//   toolCategoryId: string;
// };

interface Props {
  tools: ToolCard[];
}

function ToolListItem({ tools }: Props) {
    console.log('Received tools:', tools);
  return (
    <div>
      <h2>Tools List</h2>
      <ul>
        {tools.map(tool => (
          <li key={tool.id}>
            <h3>{tool.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToolListItem;
