'use client';

import { useState } from 'react';
import { saveSettings } from '@/app/actions/settings';
import { SettingsKey, defaultSettings } from '@/app/lib/settings';

export default function SettingsForm({
  initialSettings,
}: {
  initialSettings: Record<SettingsKey, any>;
}) {
  const [activeTab, setActiveTab] = useState<SettingsKey>('global');
  const [settings, setSettings] = useState(initialSettings);
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>(
    'idle',
  );

  const handleChange = (key: SettingsKey, path: string, value: any) => {
    setSettings((prev) => {
      const newSettings = { ...prev };
      const parts = path.split('.');
      let current = newSettings[key];

      for (let i = 0; i < parts.length - 1; i++) {
        if (!current[parts[i]]) current[parts[i]] = {};
        current = current[parts[i]];
      }
      current[parts[parts.length - 1]] = value;
      return newSettings;
    });
    setStatus('idle');
  };

  const handleSave = async () => {
    setStatus('saving');
    try {
      await saveSettings(activeTab, settings[activeTab]);
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 2000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const renderInput = (
    label: string,
    path: string,
    type = 'text',
    rows = 1,
  ) => {
    const parts = path.split('.');
    let value = settings[activeTab];
    for (const part of parts) {
      value = value?.[part];
    }
    value = value ?? '';

    return (
      <div className='mb-4'>
        <label className='block text-sm font-medium mb-1'>{label}</label>
        {rows > 1 ? (
          <textarea
            className='w-full p-2 border rounded dark:bg-zinc-800 dark:border-gray-700'
            rows={rows}
            value={value}
            onChange={(e) => handleChange(activeTab, path, e.target.value)}
          />
        ) : (
          <input
            type={type}
            className='w-full p-2 border rounded dark:bg-zinc-800 dark:border-gray-700'
            value={value}
            onChange={(e) => handleChange(activeTab, path, e.target.value)}
          />
        )}
      </div>
    );
  };

  return (
    <div className='bg-white dark:bg-black rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden'>
      {/* Tabs */}
      <div className='flex border-b border-gray-200 dark:border-gray-800'>
        {(
          ['global', 'hero', 'about_transition', 'etcetra'] as SettingsKey[]
        ).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 text-sm font-medium capitalize transition-colors ${
              activeTab === tab
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300'
            }`}
          >
            {tab.replace('_', ' ')}
          </button>
        ))}
      </div>

      <div className='p-6'>
        {activeTab === 'global' && (
          <div className='space-y-6'>
            <h3 className='text-lg font-bold'>Site Information</h3>
            {renderInput('Site Name', 'siteName')}

            <h3 className='text-lg font-bold mt-8'>Footer Contact</h3>
            {renderInput('Email', 'footer.email')}
            {renderInput('Phone', 'footer.phone')}

            <h3 className='text-lg font-bold mt-8'>Social Links</h3>
            {renderInput('Instagram', 'footer.socials.instagram')}
            {renderInput('LinkedIn', 'footer.socials.linkedin')}
            {renderInput('Behance', 'footer.socials.behance')}
          </div>
        )}

        {activeTab === 'hero' && (
          <div className='space-y-6'>
            <h3 className='text-lg font-bold'>Main Title</h3>
            <div className='grid grid-cols-2 gap-4'>
              {renderInput('First Name', 'title.first')}
              {renderInput('Last Name', 'title.last')}
            </div>

            <h3 className='text-lg font-bold mt-8'>Subtitle / Statement</h3>
            {renderInput('Line 1', 'subtitle.line1')}
            {renderInput('Line 2', 'subtitle.line2')}
            {renderInput('Highlight Word', 'subtitle.highlight')}

            <h3 className='text-lg font-bold mt-8'>Bio</h3>
            {renderInput('Bio Text', 'bio', 'text', 4)}

            <h3 className='text-lg font-bold mt-8'>Images</h3>
            {renderInput('Image 1 URL', 'images.img1')}
            {renderInput('Image 2 URL', 'images.img2')}
            {renderInput('Image 3 URL', 'images.img3')}
            {renderInput('Image 4 URL', 'images.img4')}
          </div>
        )}

        {activeTab === 'about_transition' && (
          <div className='space-y-6'>
            <h3 className='text-lg font-bold'>Content</h3>
            {renderInput('Main Text', 'text', 'text', 2)}
            {renderInput('Button Text', 'buttonText')}
          </div>
        )}

        {activeTab === 'etcetra' && (
          <div className='space-y-6'>
            <h3 className='text-lg font-bold'>Title Section</h3>
            {renderInput('Title Line 1', 'title.line1')}
            {renderInput('Subtitle', 'title.subtitle')}

            <h3 className='text-lg font-bold mt-8'>Floating Items</h3>
            {renderInput('Item 1 (Sketching)', 'floatingItems.item1')}
            {renderInput('Item 2 (TED-Ed)', 'floatingItems.item2')}

            <div className='p-4 border border-gray-100 dark:border-gray-800 rounded'>
              <p className='text-sm font-medium mb-2'>Item 3 (Questions)</p>
              {renderInput('Line 1', 'floatingItems.item3.line1')}
              {renderInput('Line 2', 'floatingItems.item3.line2')}
              {renderInput('Line 3', 'floatingItems.item3.line3')}
            </div>

            {renderInput('Item 4 (Movie Quotes)', 'floatingItems.item4')}

            <div className='p-4 border border-gray-100 dark:border-gray-800 rounded mt-4'>
              <p className='text-sm font-medium mb-2'>Item 5 (Emoji & Text)</p>
              {renderInput('Emoji', 'floatingItems.item5.emoji')}
              {renderInput('Text', 'floatingItems.item5.text')}
            </div>

            <h3 className='text-lg font-bold mt-8'>Images</h3>
            {renderInput('Image 1', 'floatingItems.images.img1')}
            {renderInput('Image 2', 'floatingItems.images.img2')}
            {renderInput('Image 3', 'floatingItems.images.img3')}
          </div>
        )}

        <div className='mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-end'>
          {status === 'saved' && (
            <span className='text-green-500 mr-4'>Saved successfully!</span>
          )}
          {status === 'error' && (
            <span className='text-red-500 mr-4'>Error saving.</span>
          )}
          <button
            onClick={handleSave}
            disabled={status === 'saving'}
            className='bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50'
          >
            {status === 'saving' ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}
