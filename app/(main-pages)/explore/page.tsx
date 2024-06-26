'use client';
import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ToolCard, ToolsReviews } from '../../lib/types';
import ToolCardComponent from '../../components/ToolCard';

const ToolsPage = () => {
  const [tools, setTools] = useState<ToolCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await fetch('/api/tools');
        const data: ToolCard[] = await response.json();
        setTools(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch tools:', error);
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container mx-auto px-2 py-2'>
      <h1 className='text-2xl font-bold mb-4 text-center'>
        Discover Your Ideal Tool Here!
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {tools.map((tool) => (
          <div key={tool.id} className='tool-item'>
            <Link href={`/tools/${tool.id}`}>
              <ToolCardComponent tool={tool} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ToolsPage;
