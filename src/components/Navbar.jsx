import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import Tag from './Tag';
// import ThemeToggle from '../components/ThemeToggle'

const navBts = [
  {
    title: 'About',
    href: '/about',
    isNew: true,
  },
  {
    title: 'Home',
    href: '/',
    isNew: false,
  },
];

export default function Navbar() {
  return (
    <nav className="bg-indigo-50 dark:bg-gray-800 sticky top-0 shadow-lg w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="cursor-pointer">
            <Link href="/">
              <Image src="/logo-lg.png" alt="logo" width={40} height={40} />
            </Link>
          </div>
          <div className="flex gap-x-4 items-center">
            {navBts.map(({ href, title, isNew }) => (
              <Button key={href} href={href} classNameProp="flex text-xl">
                {title}
                {isNew && <Tag classNames="ml-2" />}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
