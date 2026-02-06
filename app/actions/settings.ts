'use server';

import { getSettings, updateSettings, SettingsKey } from '@/app/lib/settings';
import { revalidatePath } from 'next/cache';

export async function fetchSettings(key: SettingsKey) {
  return await getSettings(key);
}

export async function saveSettings(key: SettingsKey, value: any) {
  const result = await updateSettings(key, value);
  if (result.success) {
    revalidatePath('/'); // Revalidate home page to show changes
    revalidatePath('/admin/settings');
  }
  return result;
}
