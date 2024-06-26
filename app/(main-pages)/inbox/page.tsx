'use client';

import NavBar from '../../components/NavBar';
import { ScrollArea } from '@/components/ui/scroll-area';
import ConvoListItem from '../../components/ConvoListItem';
import { useEffect, useState } from 'react';
import { Conversation } from '../../lib/types';

const InboxPage = () => {

  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => { 
    const fetchConversations = async () => {
      try {
        const response = await fetch('/api/conversations');
        const data: Conversation[] = await response.json();
        setConversations(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch conversations for this user');
        setLoading(false);
      }
    };

    fetchConversations();
  }, []);

  if (loading) {
    return <div>Loading conversations...</div>;
  };

  return (
    <div>
      <div className=' flex items-center justify-center inset-x-0 top-0 border-t  border-grey h-20 shadow-md mb-1 bg-darkGreen'>
        <h1 className='text-center text-xl font-bold text-white'>Messages</h1>
      </div>
      <ScrollArea className="h-[670px] w-[100%] p-1">
        {conversations.map(convo => (
          <li key={convo.id} className='list-none'>
            <ConvoListItem convo={convo} />
          </li>
        ))}
      </ScrollArea>
      <NavBar />
    </div>
  );
};

export default InboxPage;