// components/ToolCard.tsx
import React from 'react';
import Image from 'next/image';
import { ToolCard as ToolType } from '../lib/types';
import Liked from './Liked';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



interface ToolCardProps {
  tool: ToolType;
}

const ToolCardComponent: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="tool-card">
      <Liked></Liked>
      <div className="tool-image">
        <Image
          src={tool.picture}
          alt={tool.name}
          width={200}
          height={200}
        />
      </div>
      <div className="tool-details">
        <h1>{tool.name}</h1>
        <h2>{tool.location}</h2>
        <h2>Owned by: {tool.ownerId}</h2>
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
        <h2>Price: ${tool.dailyRate}</h2>
        <h2>Available: {tool.available ? 'Yes' : 'No'}</h2>
      </div>
    </div>
  );
};

export default ToolCardComponent;
