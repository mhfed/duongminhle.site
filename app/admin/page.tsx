import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className='text-3xl font-bold font-display mb-8'>Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='bg-white dark:bg-zinc-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm'>
          <h3 className='text-lg font-medium text-gray-500 mb-2'>
            Project Management
          </h3>
          <p className='text-gray-600 dark:text-gray-400 mb-4'>
            Manage your portfolio projects.
          </p>
          <Link
            href='/admin/projects'
            className='text-primary font-bold hover:underline'
          >
            Go to Projects &rarr;
          </Link>
        </div>
        <div className='bg-white dark:bg-zinc-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm'>
          <h3 className='text-lg font-medium text-gray-500 mb-2'>
            Testimonials
          </h3>
          <p className='text-gray-600 dark:text-gray-400 mb-4'>
            Update what people say about you.
          </p>
          <Link
            href='/admin/testimonials'
            className='text-primary font-bold hover:underline'
          >
            Go to Testimonials &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
