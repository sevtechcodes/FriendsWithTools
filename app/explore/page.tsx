// pages/tools.tsx
import React from 'react';
import Link from 'next/link';
import { ToolCard, ToolsReviews } from '../lib/types';
import ToolCardComponent from '../components/ToolCard';
import MyToolComponent from '../components/ToolCard';

const ToolsPage = () => {
	const tools: ToolCard[] = [
			{
					_id: '1',
					name: 'Hammer',
					description: 'A tool used for driving nails',
					location: 'Garage A',
					dailyRate: 5,
					weeklyRate: 30, // Add weeklyRate
					monthlyRate: 100, // Add monthlyRate
					picture: '',
					liked: true,
					available: true,
					reviews: [
							{
									_id: 'review1',
									authorId: 'user1',
									content: 'This tool is very useful!',
									createdAt: new Date('2023-06-20'),
									toolCardId: '1',
							}
					],
					ownerId: 'owner1',
					toolCategoryId: 'category1',
			},
			{
				_id: '1',
				name: 'Hammer',
				description: 'A tool used for driving nails',
				location: 'Garage A',
				dailyRate: 5,
				weeklyRate: 30, // Add weeklyRate
				monthlyRate: 100, // Add monthlyRate
				picture: '',
				liked: true,
				available: true,
				reviews: [
						{
								_id: 'review1',
								authorId: 'user1',
								content: 'This tool is very useful!',
								createdAt: new Date('2023-06-20'),
								toolCardId: '1',
						}
				],
				ownerId: 'owner1',
				toolCategoryId: 'category1',
		}
	];

	return (
			<div>
					<h1>Available Tools</h1>
					<Link href={`/tools`}>
						<div className="tool-list">
								{tools.map(tool => (
										<div key={tool._id} className="tool-item"
										>
												<ToolCardComponent tool={tool} />
										
										</div>
								))}
						</div>
					</Link>
			</div>
	);
}

export default ToolsPage;