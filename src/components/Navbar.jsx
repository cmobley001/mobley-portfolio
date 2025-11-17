import Button from './Button'
import Tag from './Tag'
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
]

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-indigo-50 dark:bg-gray-800 p-6 items-center sticky top-0 shadow-lg w-full z-10">
      <div className="cursor-pointer">
        <a href="/">
          <img src="/logo-lg.png" alt="logo" />
        </a>
      </div>
      <div className="flex gap-x-4 items-center">
        {navBts.map(({ href, title, isNew }) => (
          <Button key={href} href={href} classNameProp="flex text-xl">
            {title}
            {isNew && <Tag classNames="ml-2" />}
          </Button>
        ))}
      </div>
    </nav>
  )
}
