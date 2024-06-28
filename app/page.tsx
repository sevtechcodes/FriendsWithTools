'use server'
import { redirect } from 'next/navigation';

export default async function Home () {
  return (
    <main>
      <div>
			 {redirect('/login')};
      </div>
    </main>
  );
}
