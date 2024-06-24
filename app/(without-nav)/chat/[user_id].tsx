import React from 'react';
import { useRouter } from 'next/router';

const ChatPage = () => {
    const router = useRouter();
    const { user_id } = router.query;

    return (
        <div>
            <h1>Chat with User {user_id}</h1>
        </div>
    );
}

export default ChatPage;
