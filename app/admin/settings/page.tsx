import { getSettings } from '@/app/lib/settings';
import SettingsForm from './SettingsForm';

export default async function SettingsPage() {
  const [global, hero, about_transition, etcetra, about, showcase_tool] =
    await Promise.all([
      getSettings('global'),
      getSettings('hero'),
      getSettings('about_transition'),
      getSettings('etcetra'),
      getSettings('about'),
      getSettings('showcase_tool'),
    ]);

  const initialSettings = {
    global,
    hero,
    about_transition,
    etcetra,
    about,
    showcase_tool,
  };

  return (
    <div className='max-w-4xl mx-auto'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold mb-2'>Site Settings</h1>
        <p className='text-gray-500 dark:text-gray-400'>
          Manage text content and configuration for the entire website.
        </p>
      </div>
      <SettingsForm initialSettings={initialSettings} />
    </div>
  );
}
