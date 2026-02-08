import { db } from './db';
import { settings } from './schema';
import { eq } from 'drizzle-orm';
import { SettingsKey, defaultSettings } from './settings-constants';

export { defaultSettings };
export type { SettingsKey };

export async function getSettings(key: SettingsKey) {
  try {
    const result = await db
      .select()
      .from(settings)
      .where(eq(settings.key, key));
    if (result.length > 0) {
      return JSON.parse(result[0].value);
    }
    return defaultSettings[key];
  } catch (error) {
    console.error(`Failed to fetch settings for key ${key}:`, error);
    return defaultSettings[key];
  }
}

export async function updateSettings(key: SettingsKey, value: any) {
  try {
    const jsonValue = JSON.stringify(value);
    await db
      .insert(settings)
      .values({ key, value: jsonValue })
      .onConflictDoUpdate({
        target: settings.key,
        set: { value: jsonValue },
      });
    return { success: true };
  } catch (error) {
    console.error(`Failed to update settings for key ${key}:`, error);
    return { success: false, error };
  }
}
