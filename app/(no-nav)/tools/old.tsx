'use client';

import { useEffect, useState } from 'react';
import { ToolCard } from '../../lib/types';
import Link from 'next/link';

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
    <div>
      <h1>Tools</h1>
      <ul>
        {tools.map(tool => (
          <li key={tool.id}>
            <Link href={`/tools/${tool.id}`}>
              <h2>{tool.name}</h2>
            </Link>
            <p>{tool.description}</p>
            <img src={tool.picture} alt={tool.name} width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolsPage;







