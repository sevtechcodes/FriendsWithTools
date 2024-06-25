import React from 'react';
import Link from 'next/link';
import ToolCardComponent from './ToolCard';

interface ToolListItemProps {
    tool: { id: string; name: string;};
}

const ToolListItem: React.FC<ToolListItemProps> = ({ tool }): Too => {
    return (
        <div>
            <h3>{tool.name}</h3>
            <Link href={`/tools/${tool.id}`}>
                <ToolCardComponent tool={tool} />
            </Link>
        </div>
    );
}

export default ToolListItem;
