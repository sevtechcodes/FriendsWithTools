import React from 'react';
import Link from 'next/link';

interface ToolListItemProps {
    tool: { id: string; name: string;};
}

const ToolListItem: React.FC<ToolListItemProps> = ({ tool }) => {
    return (
        <div>
            <h3>{tool.name}</h3>
            <Link href={`/tools/${tool.id}`}>
                <a>View Details</a>
            </Link>
        </div>
    );
}

export default ToolListItem;
