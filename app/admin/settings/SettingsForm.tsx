'use client';

import { useState } from 'react';
import { saveSettings } from '@/app/actions/settings';
import { SettingsKey } from '@/app/lib/settings-constants';
import ImageUpload from '@/app/components/admin/ImageUpload';

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
          [
            'global',
            'hero',
            'about_transition',
            'etcetra',
            'about',
            'showcase_tool',
          ] as SettingsKey[]
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

            <div className='mt-8'>
              <div className='flex justify-between items-center mb-4 border-b pb-2 dark:border-zinc-700'>
                <h3 className='text-lg font-bold'>Navigation Links</h3>
                <button
                  onClick={() => {
                    const current = settings.global?.navLinks || [];
                    handleChange('global', 'navLinks', [
                      ...current,
                      { label: 'New Link', href: '#', id: `nav-${Date.now()}` },
                    ]);
                  }}
                  className='text-sm bg-primary text-white px-3 py-1 rounded hover:bg-primary/90'
                >
                  + Add Link
                </button>
              </div>
              <div className='space-y-4'>
                {(settings.global?.navLinks || []).map(
                  (link: any, index: number) => (
                    <div
                      key={index}
                      className='p-4 border rounded bg-zinc-50 dark:bg-zinc-900 dark:border-zinc-800 relative'
                    >
                      <button
                        onClick={() => {
                          const current = [
                            ...(settings.global?.navLinks || []),
                          ];
                          current.splice(index, 1);
                          handleChange('global', 'navLinks', current);
                        }}
                        className='absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 transition-colors'
                        title='Remove'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M18 6 6 18' />
                          <path d='m6 6 12 12' />
                        </svg>
                      </button>
                      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div>
                          <label className='block text-xs font-medium mb-1 text-gray-500'>
                            Label
                          </label>
                          <input
                            type='text'
                            className='w-full p-2 border rounded dark:bg-zinc-800 dark:border-gray-700 text-sm'
                            value={link.label}
                            onChange={(e) =>
                              handleChange(
                                'global',
                                `navLinks.${index}.label`,
                                e.target.value,
                              )
                            }
                          />
                        </div>
                        <div>
                          <label className='block text-xs font-medium mb-1 text-gray-500'>
                            Href
                          </label>
                          <input
                            type='text'
                            className='w-full p-2 border rounded dark:bg-zinc-800 dark:border-gray-700 text-sm'
                            value={link.href}
                            onChange={(e) =>
                              handleChange(
                                'global',
                                `navLinks.${index}.href`,
                                e.target.value,
                              )
                            }
                            placeholder='#id or /url'
                          />
                        </div>
                        <div>
                          <label className='block text-xs font-medium mb-1 text-gray-500'>
                            ID (HTML id)
                          </label>
                          <input
                            type='text'
                            className='w-full p-2 border rounded dark:bg-zinc-800 dark:border-gray-700 text-sm'
                            value={link.id}
                            onChange={(e) =>
                              handleChange(
                                'global',
                                `navLinks.${index}.id`,
                                e.target.value,
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

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
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium mb-1'>
                  Image 1
                </label>
                <ImageUpload
                  value={settings.hero?.images?.img1 || ''}
                  onChange={(url) => handleChange('hero', 'images.img1', url)}
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-1'>
                  Image 2
                </label>
                <ImageUpload
                  value={settings.hero?.images?.img2 || ''}
                  onChange={(url) => handleChange('hero', 'images.img2', url)}
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-1'>
                  Image 3
                </label>
                <ImageUpload
                  value={settings.hero?.images?.img3 || ''}
                  onChange={(url) => handleChange('hero', 'images.img3', url)}
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-1'>
                  Image 4
                </label>
                <ImageUpload
                  value={settings.hero?.images?.img4 || ''}
                  onChange={(url) => handleChange('hero', 'images.img4', url)}
                />
              </div>
            </div>
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
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium mb-1'>
                  Image 1
                </label>
                <ImageUpload
                  value={settings.etcetra?.floatingItems?.images?.img1 || ''}
                  onChange={(url) =>
                    handleChange('etcetra', 'floatingItems.images.img1', url)
                  }
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-1'>
                  Image 2
                </label>
                <ImageUpload
                  value={settings.etcetra?.floatingItems?.images?.img2 || ''}
                  onChange={(url) =>
                    handleChange('etcetra', 'floatingItems.images.img2', url)
                  }
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-1'>
                  Image 3
                </label>
                <ImageUpload
                  value={settings.etcetra?.floatingItems?.images?.img3 || ''}
                  onChange={(url) =>
                    handleChange('etcetra', 'floatingItems.images.img3', url)
                  }
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className='space-y-8'>
            <div className='bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg'>
              <h3 className='text-lg font-bold mb-4 border-b pb-2 dark:border-zinc-700'>
                Intro Section
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {renderInput('Name', 'intro.name')}
                {renderInput('Subtitle', 'intro.subtitle')}
              </div>
              {renderInput('Bio', 'intro.bio', 'text', 3)}

              <div className='mt-4'>
                <label className='block text-sm font-medium mb-1'>
                  Profile Image
                </label>
                <ImageUpload
                  value={settings.about?.intro?.image || ''}
                  onChange={(url) => handleChange('about', 'intro.image', url)}
                />
              </div>
            </div>

            <div className='bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg'>
              <div className='flex justify-between items-center mb-4 border-b pb-2 dark:border-zinc-700'>
                <h3 className='text-lg font-bold'>
                  Experience (Accordion)
                </h3>
                <button
                  onClick={() => {
                    const current = settings.about?.experience || [];
                    handleChange('about', 'experience', [
                      ...current,
                      { title: '', content: '' },
                    ]);
                  }}
                  className='text-sm bg-primary text-white px-3 py-1 rounded hover:bg-primary/90'
                >
                  + Add Item
                </button>
              </div>
              <div className='space-y-6'>
                {(settings.about?.experience || []).map(
                  (item: any, index: number) => (
                    <div
                      key={index}
                      className='p-4 border rounded bg-white dark:bg-black dark:border-zinc-800 relative'
                    >
                      <div className='flex justify-between items-center mb-2'>
                        <h4 className='font-medium text-primary'>
                          Item {index + 1}
                        </h4>
                        <button
                          onClick={() => {
                            const current = [
                              ...(settings.about?.experience || []),
                            ];
                            current.splice(index, 1);
                            handleChange('about', 'experience', current);
                          }}
                          className='p-1 text-gray-400 hover:text-red-500 transition-colors'
                          title='Remove'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path d='M18 6 6 18' />
                            <path d='m6 6 12 12' />
                          </svg>
                        </button>
                      </div>
                      <div className='space-y-3'>
                        <div className='mb-4'>
                          <label className='block text-sm font-medium mb-1'>
                            Title
                          </label>
                          <input
                            type='text'
                            className='w-full p-2 border rounded dark:bg-zinc-800 dark:border-gray-700'
                            value={item.title}
                            onChange={(e) =>
                              handleChange(
                                'about',
                                `experience.${index}.title`,
                                e.target.value,
                              )
                            }
                          />
                        </div>
                        <div className='mb-4'>
                          <label className='block text-sm font-medium mb-1'>
                            Content
                          </label>
                          <textarea
                            className='w-full p-2 border rounded dark:bg-zinc-800 dark:border-gray-700'
                            rows={3}
                            value={item.content}
                            onChange={(e) =>
                              handleChange(
                                'about',
                                `experience.${index}.content`,
                                e.target.value,
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className='bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg'>
              <h3 className='text-lg font-bold mb-4 border-b pb-2 dark:border-zinc-700'>
                At a Glance (Gallery)
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {(settings.about?.gallery?.length
                  ? settings.about.gallery
                  : ['', '', '', '']
                ).map((url: string, index: number) => (
                  <div key={index}>
                    <label className='block text-sm font-medium mb-1'>
                      Image {index + 1}
                    </label>
                    <ImageUpload
                      value={url}
                      onChange={(newUrl) =>
                        handleChange('about', `gallery.${index}`, newUrl)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg'>
              <h3 className='text-lg font-bold mb-4 border-b pb-2 dark:border-zinc-700'>
                Quote Section
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {renderInput('Line 1', 'quote.line1')}
                {renderInput('Line 1 Strike', 'quote.line1_strike')}
                {renderInput('Line 2', 'quote.line2')}
                {renderInput('Line 2 Highlight', 'quote.line2_highlight')}
                {renderInput('Signature', 'quote.signature')}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'showcase_tool' && (
          <div className='space-y-6'>
            <h3 className='text-lg font-bold'>Section Content</h3>
            {renderInput('Title', 'title')}
            {renderInput('Subtitle', 'subtitle', 'text', 2)}

            <div className='space-y-6 mt-8'>
              <div className='bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg'>
                <div className='flex justify-between items-center mb-4 border-b pb-2 dark:border-zinc-700'>
                  <h3 className='text-lg font-bold'>Inner Circle Icons</h3>
                  <button
                    onClick={() => {
                      const current = settings.showcase_tool?.innerCircle || [];
                      handleChange('showcase_tool', 'innerCircle', [
                        ...current,
                        '',
                      ]);
                    }}
                    className='text-sm bg-primary text-white px-3 py-1 rounded hover:bg-primary/90'
                  >
                    + Add Icon
                  </button>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  {(settings.showcase_tool?.innerCircle || []).map(
                    (url: string, index: number) => (
                      <div key={index} className='relative'>
                        <label className='block text-sm font-medium mb-1'>
                          Icon {index + 1}
                        </label>
                        <ImageUpload
                          value={url}
                          onChange={(newUrl) =>
                            handleChange(
                              'showcase_tool',
                              `innerCircle.${index}`,
                              newUrl,
                            )
                          }
                        />
                        <button
                          onClick={() => {
                            const current = [
                              ...(settings.showcase_tool?.innerCircle || []),
                            ];
                            current.splice(index, 1);
                            handleChange(
                              'showcase_tool',
                              'innerCircle',
                              current,
                            );
                          }}
                          className='absolute top-8 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 z-10'
                          title='Remove'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='14'
                            height='14'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path d='M18 6 6 18' />
                            <path d='m6 6 12 12' />
                          </svg>
                        </button>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className='bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg'>
                <div className='flex justify-between items-center mb-4 border-b pb-2 dark:border-zinc-700'>
                  <h3 className='text-lg font-bold'>Outer Circle Icons</h3>
                  <button
                    onClick={() => {
                      const current = settings.showcase_tool?.outerCircle || [];
                      handleChange('showcase_tool', 'outerCircle', [
                        ...current,
                        '',
                      ]);
                    }}
                    className='text-sm bg-primary text-white px-3 py-1 rounded hover:bg-primary/90'
                  >
                    + Add Icon
                  </button>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  {(settings.showcase_tool?.outerCircle || []).map(
                    (url: string, index: number) => (
                      <div key={index} className='relative'>
                        <label className='block text-sm font-medium mb-1'>
                          Icon {index + 1}
                        </label>
                        <ImageUpload
                          value={url}
                          onChange={(newUrl) =>
                            handleChange(
                              'showcase_tool',
                              `outerCircle.${index}`,
                              newUrl,
                            )
                          }
                        />
                        <button
                          onClick={() => {
                            const current = [
                              ...(settings.showcase_tool?.outerCircle || []),
                            ];
                            current.splice(index, 1);
                            handleChange(
                              'showcase_tool',
                              'outerCircle',
                              current,
                            );
                          }}
                          className='absolute top-8 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 z-10'
                          title='Remove'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='14'
                            height='14'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path d='M18 6 6 18' />
                            <path d='m6 6 12 12' />
                          </svg>
                        </button>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className='bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg'>
                <div className='flex justify-between items-center mb-4 border-b pb-2 dark:border-zinc-700'>
                  <div className='flex items-center gap-4'>
                    <h3 className='text-lg font-bold'>
                      Extra Outer Circle Icons
                    </h3>
                    <div className='flex items-center gap-2'>
                      <input
                        type='checkbox'
                        id='showExtraOuterCircle'
                        checked={
                          settings.showcase_tool?.showExtraOuterCircle || false
                        }
                        onChange={(e) =>
                          handleChange(
                            'showcase_tool',
                            'showExtraOuterCircle',
                            e.target.checked,
                          )
                        }
                        className='rounded border-gray-300 text-primary focus:ring-primary'
                      />
                      <label
                        htmlFor='showExtraOuterCircle'
                        className='text-sm text-gray-600 dark:text-gray-400'
                      >
                        Show this circle
                      </label>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const current =
                        settings.showcase_tool?.extraOuterCircle || [];
                      handleChange('showcase_tool', 'extraOuterCircle', [
                        ...current,
                        '',
                      ]);
                    }}
                    className='text-sm bg-primary text-white px-3 py-1 rounded hover:bg-primary/90'
                  >
                    + Add Icon
                  </button>
                </div>

                {settings.showcase_tool?.showExtraOuterCircle && (
                  <div className='grid grid-cols-2 gap-4'>
                    {(settings.showcase_tool?.extraOuterCircle || []).map(
                      (url: string, index: number) => (
                        <div key={index} className='relative'>
                          <label className='block text-sm font-medium mb-1'>
                            Icon {index + 1}
                          </label>
                          <ImageUpload
                            value={url}
                            onChange={(newUrl) =>
                              handleChange(
                                'showcase_tool',
                                `extraOuterCircle.${index}`,
                                newUrl,
                              )
                            }
                          />
                          <button
                            onClick={() => {
                              const current = [
                                ...(settings.showcase_tool?.extraOuterCircle ||
                                  []),
                              ];
                              current.splice(index, 1);
                              handleChange(
                                'showcase_tool',
                                'extraOuterCircle',
                                current,
                              );
                            }}
                            className='absolute top-8 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 z-10'
                            title='Remove'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='14'
                              height='14'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            >
                              <path d='M18 6 6 18' />
                              <path d='m6 6 12 12' />
                            </svg>
                          </button>
                        </div>
                      ),
                    )}
                  </div>
                )}
              </div>
            </div>
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
