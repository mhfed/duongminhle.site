export default function Navbar() {
  return (
    <nav className='fixed top-0 w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-border-light dark:border-border-dark px-6 py-4 flex justify-between items-center transition-all duration-300 shadow-sm'>
      <a
        className='text-primary font-display font-bold tracking-widest text-lg hover:scale-105 transition-transform cursor-pointer uppercase'
        href='#about'
      >
        Duong Minh Le.
      </a>
      <div className='hidden md:flex space-x-8 text-sm font-medium tracking-widest text-gray-500 dark:text-gray-400'>
        <a
          className='nav-link hover:text-primary transition-colors relative group'
          href='#about'
          id='nav-about'
        >
          ABOUT
          <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
        </a>
        <a
          className='nav-link hover:text-primary transition-colors relative group'
          href='#projects'
          id='nav-projects'
        >
          PROJECTS
          <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
        </a>
        <a
          className='nav-link hover:text-primary transition-colors relative group'
          href='#etcetra'
          id='nav-etcetra'
        >
          ETCETRA
          <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
        </a>
        <a
          className='nav-link hover:text-primary transition-colors relative group'
          href='#'
          id='nav-resume'
        >
          RESUME
          <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
        </a>
      </div>
      <button className='md:hidden text-gray-900 dark:text-white'>
        <span className='material-icons'>menu</span>
      </button>
    </nav>
  );
}
