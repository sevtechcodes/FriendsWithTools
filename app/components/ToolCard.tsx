import React from 'react';
import { ToolCard as ToolType } from '../lib/types';
import Liked from './Liked';

export interface ToolCardProps {
  tool: ToolType;
}

const ToolCardComponent =  ( { tool }: ToolCardProps ) => {
  const defaultImage = 'https://shorturl.at/PyeKu'; //place holder image
	//I have switched the place of defaultImage to show first, for now.
  return (
		<div className=" border-slate-50 border-2 p-4 rounded-xl shadow-md flex flex-col items-center m-4">	
				<div className="relative h-64 rounded-m bg-cover w-80 bg-center " 
					style={{ backgroundImage: `url(${defaultImage || tool.picture})` }}> 
					<div><Liked /></div>
				</div>
				<div className="mt-4 flex justify-between">
					<div>
						<p className="text-lg font-semibold">{tool.name}</p>
						<p className="mt-1 text-sm text-gray-500">{tool.location}</p>
						<h2 className="mt-1 text-sm text-gray-500">{tool.ownerId}</h2>
					</div>
					<h1 className="text-2xl font-semibold text-gray-900 -mt-2">${tool.dailyRate}</h1>
				</div>
		</div>
  );
};

export default ToolCardComponent;
