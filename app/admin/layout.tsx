import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen flex bg-gray-100 dark:bg-zinc-900'>
      {/* Sidebar */}
      <aside className='w-64 bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 hidden md:block'>
        <div className='p-6'>
          <h1 className='text-2xl font-bold font-display tracking-tighter'>
            Portfolio<span className='text-primary'>Admin</span>
          </h1>
        </div>
        <nav className='mt-6 px-4 space-y-2'>
          <Link
            href='/admin'
            className='block px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors'
          >
            Dashboard
          </Link>
          <Link
            href='/admin/projects'
            className='block px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors'
          >
            Projects
          </Link>
          <Link
            href='/admin/testimonials'
            className='block px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors'
          >
            Testimonials
          </Link>
          <div className='pt-4 mt-4 border-t border-gray-200 dark:border-gray-800'>
            <Link
              href='/'
              className='block px-4 py-2 text-sm text-gray-500 hover:text-primary transition-colors'
            >
              View Live Site
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className='flex-1 p-8 overflow-y-auto'>{children}</main>
    </div>
  );
}
