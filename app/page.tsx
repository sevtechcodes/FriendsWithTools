import Link from 'next/link';
import Image from 'next/image';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

export default function Home() {
  return (
    <main>
      <div>
        <SearchBar />
      </div>
      <h1>Homepage</h1>
      <nav>
        <ul>
          <li>
            <Link href='/explore'>Explore</Link>
          </li>
          <li>
            <Link href='/inbox'>Inbox</Link>
          </li>
          <li>
            <Link href='/rented'>Rented</Link>
          </li>
          <li>
            <Link href='/user'>User Profile</Link>
          </li>
          <li>
            <Link href='/wishlist'>Wishlist</Link>
          </li>
        </ul>
      </nav>

      <div>
        <NavBar />
      </div>
    </main>
  );
}
