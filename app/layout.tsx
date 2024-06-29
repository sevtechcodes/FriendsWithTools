import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import './globals.css';


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FriendsWithTools - Share your tools',
  description: 'Rent tools from your neighbors',
};

export default function RootLayout ({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
		<ClerkProvider>
			<html lang='en' className='h-full'>
				<body className={`${roboto.className}, h-full`}>
				<header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>
            {children}
          </main>
				</body>
			</html>
		</ClerkProvider>
  );
}