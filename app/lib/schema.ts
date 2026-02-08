import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core';

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  role: text('role').notNull(),
  duration: text('duration').notNull(),
  image: text('image').notNull(),
  alt: text('alt').notNull(),
  link: text('link'), // Optional link to project
  roleColor: text('role_color').default('text-gray-500').notNull(), // 'text-gray-500' or 'text-primary'
  order: integer('order').default(0).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const testimonials = pgTable('testimonials', {
  id: serial('id').primaryKey(),
  content: text('content').notNull(),
  authorName: text('author_name').notNull(),
  authorRole: text('author_role').notNull(),
  authorImage: text('author_image').notNull(),
  order: integer('order').default(0).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const settings = pgTable('settings', {
  key: text('key').primaryKey(),
  value: text('value').notNull(), // using text to store JSON string as Drizzle generic jsonb support varies or sometimes needs simpler handling
});
