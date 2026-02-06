import { db } from '@/app/lib/db';
import { projects } from '@/app/lib/schema';
import { desc } from 'drizzle-orm';
import { deleteProject } from '@/app/lib/actions';
import Image from 'next/image';

export default async function AdminProjectsPage() {
  const allProjects = await db
    .select()
    .from(projects)
    .orderBy(desc(projects.order));

  return (
    <div>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-3xl font-bold font-display'>Projects</h1>
        <a
          href='/admin/projects/new'
          className='bg-primary text-white px-4 py-2 rounded-lg hover:brightness-110 transition-all'
        >
          + New Project
        </a>
      </div>

      <div className='bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden'>
        <table className='w-full text-left'>
          <thead className='bg-gray-50 dark:bg-zinc-800/50 border-b border-gray-200 dark:border-gray-800'>
            <tr>
              <th className='p-4 text-xs uppercase tracking-wider text-gray-500 font-medium'>
                Image
              </th>
              <th className='p-4 text-xs uppercase tracking-wider text-gray-500 font-medium'>
                Title
              </th>
              <th className='p-4 text-xs uppercase tracking-wider text-gray-500 font-medium'>
                Role
              </th>
              <th className='p-4 text-xs uppercase tracking-wider text-gray-500 font-medium'>
                Order
              </th>
              <th className='p-4 text-xs uppercase tracking-wider text-gray-500 font-medium text-right'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 dark:divide-gray-800'>
            {allProjects.map((project) => (
              <tr
                key={project.id}
                className='hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors'
              >
                <td className='p-4'>
                  <div className='relative w-12 h-12 rounded-lg overflow-hidden bg-gray-200'>
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className='object-cover'
                    />
                  </div>
                </td>
                <td className='p-4 font-medium'>{project.title}</td>
                <td className='p-4 text-gray-500'>{project.role}</td>
                <td className='p-4 text-gray-500'>{project.order}</td>
                <td className='p-4 text-right'>
                  <form action={deleteProject.bind(null, project.id)}>
                    <button className='text-red-500 hover:text-red-600 text-sm font-medium'>
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {allProjects.length === 0 && (
              <tr>
                <td colSpan={5} className='p-8 text-center text-gray-500'>
                  No projects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
