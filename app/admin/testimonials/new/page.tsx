import { createTestimonial } from '@/app/lib/actions';
import Link from 'next/link';

export default function NewTestimonialPage() {
  return (
    <div className='max-w-2xl mx-auto'>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-3xl font-bold font-display'>New Testimonial</h1>
        <Link
          href='/admin/testimonials'
          className='text-gray-500 hover:text-black dark:hover:text-white'
        >
          Cancel
        </Link>
      </div>

      <form
        action={createTestimonial}
        className='space-y-6 bg-white dark:bg-zinc-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800'
      >
        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Author Name
          </label>
          <input
            name='authorName'
            required
            className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
            placeholder='e.g. John Doe'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Author Role
          </label>
          <input
            name='authorRole'
            required
            className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
            placeholder='e.g. CTO @ TechFlow'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Author Image URL
          </label>
          <input
            name='authorImage'
            required
            className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
            placeholder='https://...'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Content
          </label>
          <textarea
            name='content'
            required
            rows={4}
            className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
            placeholder='Testimonial text...'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Order
          </label>
          <input
            name='order'
            type='number'
            defaultValue='0'
            className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
          />
        </div>

        <button
          type='submit'
          className='w-full bg-primary text-white font-bold py-3 rounded-lg hover:brightness-110 transition-all'
        >
          Create Testimonial
        </button>
      </form>
    </div>
  );
}
