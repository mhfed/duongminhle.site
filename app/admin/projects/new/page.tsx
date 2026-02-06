import { createProject } from '@/app/lib/actions';
import Link from 'next/link';
import ImageUpload from '@/app/components/admin/ImageUpload';

export default function NewProjectPage() {
  return (
    <div className='max-w-2xl mx-auto'>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-3xl font-bold font-display'>New Project</h1>
        <Link
          href='/admin/projects'
          className='text-gray-500 hover:text-black dark:hover:text-white'
        >
          Cancel
        </Link>
      </div>

      <form
        action={createProject}
        className='space-y-6 bg-white dark:bg-zinc-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800'
      >
        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Title
          </label>
          <input
            name='title'
            required
            className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
            placeholder='Project Title'
          />
        </div>

        <div className='grid grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Role
            </label>
            <input
              name='role'
              required
              className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
              placeholder='e.g. UX Design'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Role Color
            </label>
            <select
              name='roleColor'
              className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
            >
              <option value='text-gray-500'>Gray (Default)</option>
              <option value='text-primary'>Primary (Highlight)</option>
            </select>
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Duration
          </label>
          <input
            name='duration'
            required
            className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
            placeholder='e.g. 3 months'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Image
          </label>
          <ImageUpload name='image' />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Alt Text
          </label>
          <input
            name='alt'
            required
            className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
            placeholder='Description of image'
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
          Create Project
        </button>
      </form>
    </div>
  );
}
