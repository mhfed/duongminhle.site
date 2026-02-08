'use server';

import { db } from '@/app/lib/db';
import { projects, testimonials } from '@/app/lib/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// --- Projects Actions ---

export async function createProject(formData: FormData) {
  const title = formData.get('title') as string;
  const role = formData.get('role') as string;
  const duration = formData.get('duration') as string;
  const image = formData.get('image') as string;
  const alt = formData.get('alt') as string;
  const roleColor = formData.get('roleColor') as string;
  const link = formData.get('link') as string;
  const order = parseInt(formData.get('order') as string) || 0;

  await db.insert(projects).values({
    title,
    role,
    duration,
    image,
    alt,
    roleColor,
    link,
    order,
  });

  revalidatePath('/admin/projects');
  revalidatePath('/');
  redirect('/admin/projects');
}

export async function updateProject(id: number, formData: FormData) {
  const title = formData.get('title') as string;
  const role = formData.get('role') as string;
  const duration = formData.get('duration') as string;
  const image = formData.get('image') as string;
  const alt = formData.get('alt') as string;
  const roleColor = formData.get('roleColor') as string;
  const link = formData.get('link') as string;
  const order = parseInt(formData.get('order') as string) || 0;

  await db
    .update(projects)
    .set({
      title,
      role,
      duration,
      image,
      alt,
      roleColor,
      link,
      order,
    })
    .where(eq(projects.id, id));

  revalidatePath('/admin/projects');
  revalidatePath('/');
  redirect('/admin/projects');
}

export async function deleteProject(id: number) {
  await db.delete(projects).where(eq(projects.id, id));
  revalidatePath('/admin/projects');
  revalidatePath('/');
}

// --- Testimonials Actions ---

export async function createTestimonial(formData: FormData) {
  const content = formData.get('content') as string;
  const authorName = formData.get('authorName') as string;
  const authorRole = formData.get('authorRole') as string;
  const authorImage = formData.get('authorImage') as string;
  const order = parseInt(formData.get('order') as string) || 0;

  await db.insert(testimonials).values({
    content,
    authorName,
    authorRole,
    authorImage,
    order,
  });

  revalidatePath('/admin/testimonials');
  revalidatePath('/');
  redirect('/admin/testimonials');
}

export async function updateTestimonial(id: number, formData: FormData) {
  const content = formData.get('content') as string;
  const authorName = formData.get('authorName') as string;
  const authorRole = formData.get('authorRole') as string;
  const authorImage = formData.get('authorImage') as string;
  const order = parseInt(formData.get('order') as string) || 0;

  await db
    .update(testimonials)
    .set({
      content,
      authorName,
      authorRole,
      authorImage,
      order,
    })
    .where(eq(testimonials.id, id));

  revalidatePath('/admin/testimonials');
  revalidatePath('/');
  redirect('/admin/testimonials');
}

export async function deleteTestimonial(id: number) {
  await db.delete(testimonials).where(eq(testimonials.id, id));
  revalidatePath('/admin/testimonials');
  revalidatePath('/');
}
