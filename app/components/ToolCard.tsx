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
		<div className="bg-teal-100 mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div className="group relative">
				<div className="tool-card"  >
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
						<p className="text-sm font-medium text-gray-900">${tool.dailyRate}</p>
						<p className="mt-1 text-sm text-gray-500">Available: {tool.available ? 'Yes' : 'No'}</p>
					</div>
				</div>




    </div>
  </div>



  );
};

export default ToolCardComponent;
