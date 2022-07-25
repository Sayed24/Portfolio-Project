import Link from 'next/link';

export const Nav = () => {
  return (
    <div className='navbar sticky-top bg-white border-bottom'>
      <div className='logo'>Pragmatic Developer</div>
      <ul>
        <li>
          <Link href='/about' as='/our-history' prefetch>
            <a>About me</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact me</a>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href='/projects'>
            <a>Projects</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
