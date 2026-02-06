import { db } from '@/app/lib/db';
import { testimonials } from '@/app/lib/schema';
import { eq } from 'drizzle-orm';
import { updateTestimonial } from '@/app/lib/actions';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function EditTestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const testimonial = await db
    .select()
    .from(testimonials)
    .where(eq(testimonials.id, parseInt(id)))
    .limit(1)
    .then((rows) => rows[0]);

  if (!testimonial) {
    notFound();
  }

  return (
    <div className='max-w-2xl mx-auto'>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-3xl font-bold font-display'>Edit Testimonial</h1>
        <Link
          href='/admin/testimonials'
          className='text-gray-500 hover:text-black dark:hover:text-white'
        >
          Cancel
        </Link>
      </div>

      <form
        action={updateTestimonial.bind(null, testimonial.id)}
        className='space-y-6 bg-white dark:bg-zinc-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800'
      >
        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Author Name
          </label>
          <input
            name='authorName'
            defaultValue={testimonial.authorName}
            required
            className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Author Role
          </label>
          <input
            name='authorRole'
            defaultValue={testimonial.authorRole}
            required
            className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Author Image URL
          </label>
          <input
            name='authorImage'
            defaultValue={testimonial.authorImage}
            required
            className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Content
          </label>
          <textarea
            name='content'
            defaultValue={testimonial.content}
            required
            rows={4}
            className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Order
          </label>
          <input
            name='order'
            type='number'
            defaultValue={testimonial.order}
            className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:outline-none'
          />
        </div>

        <button
          type='submit'
          className='w-full bg-primary text-white font-bold py-3 rounded-lg hover:brightness-110 transition-all'
        >
          Update Testimonial
        </button>
      </form>
    </div>
  );
}
