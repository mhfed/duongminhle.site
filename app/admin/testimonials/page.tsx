import { db } from '@/app/lib/db';
import { testimonials } from '@/app/lib/schema';
import { desc } from 'drizzle-orm';
import { deleteTestimonial } from '@/app/lib/actions';
import Image from 'next/image';
import Link from 'next/link';

export default async function AdminTestimonialsPage() {
  const allTestimonials = await db
    .select()
    .from(testimonials)
    .orderBy(desc(testimonials.order));

  return (
    <div>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-3xl font-bold font-display'>Testimonials</h1>
        <Link
          href='/admin/testimonials/new'
          className='bg-primary text-white px-4 py-2 rounded-lg hover:brightness-110 transition-all'
        >
          + New Testimonial
        </Link>
      </div>

      <div className='bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden'>
        <table className='w-full text-left'>
          <thead className='bg-gray-50 dark:bg-zinc-800/50 border-b border-gray-200 dark:border-gray-800'>
            <tr>
              <th className='p-4 text-xs uppercase tracking-wider text-gray-500 font-medium'>
                Author
              </th>
              <th className='p-4 text-xs uppercase tracking-wider text-gray-500 font-medium'>
                Role
              </th>
              <th className='p-4 text-xs uppercase tracking-wider text-gray-500 font-medium'>
                Content
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
            {allTestimonials.map((testimonial) => (
              <tr
                key={testimonial.id}
                className='hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors'
              >
                <td className='p-4 font-medium'>
                  <div className='flex items-center space-x-3'>
                    <div className='relative w-8 h-8 rounded-full overflow-hidden bg-gray-200'>
                      <Image
                        src={testimonial.authorImage}
                        alt={testimonial.authorName}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <span>{testimonial.authorName}</span>
                  </div>
                </td>
                <td className='p-4 text-gray-500'>{testimonial.authorRole}</td>
                <td className='p-4 text-gray-500 max-w-xs truncate'>
                  {testimonial.content}
                </td>
                <td className='p-4 text-gray-500'>{testimonial.order}</td>
                <td className='p-4 text-right'>
                  <div className='flex items-center justify-end space-x-4'>
                    <Link
                      href={`/admin/testimonials/${testimonial.id}`}
                      className='text-primary hover:text-primary/80 text-sm font-medium'
                    >
                      Edit
                    </Link>
                    <form action={deleteTestimonial.bind(null, testimonial.id)}>
                      <button className='text-red-500 hover:text-red-600 text-sm font-medium'>
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {allTestimonials.length === 0 && (
              <tr>
                <td colSpan={5} className='p-8 text-center text-gray-500'>
                  No testimonials found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
