import Link from 'next/link';
import '../static/css/style.css';

const Navbar = () => (
  <nav className="inline-flex flex-justify-center fixed navbar-spread">
    <ul className="margin-padding-zero inline-flex flex-justify-center">
      <li className="inline-flex">
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className="inline-flex">
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li className="inline-flex">
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
