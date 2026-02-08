import { db } from '@/app/lib/db';
import { projects } from '@/app/lib/schema';
import { eq } from 'drizzle-orm';
import { updateProject } from '@/app/lib/actions';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ImageUpload from '@/app/components/admin/ImageUpload';

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await db
    .select()
    .from(projects)
    .where(eq(projects.id, parseInt(id)))
    .limit(1)
    .then((rows) => rows[0]);

  if (!project) {
    notFound();
  }

  return (
    <div className='max-w-2xl mx-auto'>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-3xl font-bold font-display'>Edit Project</h1>
        <Link
          href='/admin/projects'
          className='text-gray-500 hover:text-black dark:hover:text-white'
        >
          Cancel
        </Link>
      </div>

      <form
        action={updateProject.bind(null, project.id)}
        className='space-y-6 bg-white dark:bg-zinc-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800'
      >
        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Title
          </label>
          <input
            name='title'
            defaultValue={project.title}
            required
            className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
          />
        </div>

        <div className='grid grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Role
            </label>
            <input
              name='role'
              defaultValue={project.role}
              required
              className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Role Color
            </label>
            <select
              name='roleColor'
              defaultValue={project.roleColor}
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
            defaultValue={project.duration}
            required
            className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Image
          </label>
          <ImageUpload name='image' value={project.image} />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Alt Text
          </label>
          <input
            name='alt'
            defaultValue={project.alt}
            required
            className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Link (Optional)
          </label>
          <input
            name='link'
            defaultValue={project.link || ''}
            className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
            placeholder='https://behance.net/...'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Order
          </label>
          <input
            name='order'
            type='number'
            defaultValue={project.order}
            className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
          />
        </div>

        <button
          type='submit'
          className='w-full bg-primary text-white font-bold py-3 rounded-lg hover:brightness-110 transition-all'
        >
          Update Project
        </button>
      </form>
    </div>
  );
}
