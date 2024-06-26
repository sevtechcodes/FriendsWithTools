<<<<<<< HEAD
import Link from 'next/link';
import Image from 'next/image';
import NavBar from './components/NavBar';
=======

>>>>>>> 184e280523bfe684eed9b1ced5eb2ca0b0527882
import SearchBar from './components/SearchBar';

export default function Home() {
  return (
    <main>
      <div>
        <SearchBar />
      </div>
<<<<<<< HEAD
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
=======
      <h1>Explore Page</h1>
>>>>>>> 184e280523bfe684eed9b1ced5eb2ca0b0527882
    </main>
  );
}
