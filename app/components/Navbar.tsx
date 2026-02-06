import { defaultSettings } from '@/app/lib/settings';

export default function Navbar({
  settings = defaultSettings.global,
}: {
  settings?: any;
}) {
  const { siteName, navLinks } = settings;
  return (
    <nav className='fixed top-0 w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-border-light dark:border-border-dark px-6 py-4 flex justify-between items-center transition-all duration-300 shadow-sm'>
      <a
        className='text-primary font-display font-bold tracking-widest text-lg hover:scale-105 transition-transform cursor-pointer uppercase'
        href='#about'
      >
        {siteName}
      </a>
      <div className='hidden md:flex space-x-8 text-sm font-medium tracking-widest text-gray-500 dark:text-gray-400'>
        {navLinks.map((link: any) => (
          <a
            key={link.id}
            className='nav-link hover:text-primary transition-colors relative group'
            href={link.href}
            id={link.id}
          >
            {link.label}
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
          </a>
        ))}
      </div>
      <button className='md:hidden text-gray-900 dark:text-white'>
        <span className='material-icons'>menu</span>
      </button>
    </nav>
  );
}
