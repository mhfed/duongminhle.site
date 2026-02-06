import { getSettings } from '@/app/lib/settings';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ExperienceAccordion from './components/ExperienceAccordion';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  const [globalSettings, aboutSettings] = await Promise.all([
    getSettings('global'),
    getSettings('about'),
  ]);

  const { intro, experience, gallery, quote } = aboutSettings;

  return (
    <div className='bg-black min-h-screen text-white font-body selection:bg-primary selection:text-white'>
      <Navbar settings={globalSettings} />

      <main className='pt-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto'>
        {/* Intro Section */}
        <section className='flex flex-col items-center text-center space-y-8 mb-24'>
          <div className='relative w-48 h-48 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl'>
            {intro?.image ? (
              <Image
                src={intro.image}
                alt={intro.name}
                fill
                className='object-cover'
              />
            ) : (
              <div className='w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-600'>
                <span className='material-icons text-6xl'>person</span>
              </div>
            )}
          </div>

          <div className='space-y-4 max-w-2xl'>
            <h1 className='text-4xl md:text-5xl font-display font-bold tracking-tight text-white uppercase'>
              {intro?.name}
            </h1>
            <p className='text-gray-500 text-sm tracking-wide font-light italic'>
              {intro?.subtitle}
            </p>
            <p className='text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto'>
              {intro?.bio}
            </p>
          </div>
        </section>

        {/* Experience Accordion */}
        <section className='mb-32'>
          <ExperienceAccordion items={experience || []} />
        </section>

        {/* At a Glance Section */}
        <section className='mb-32'>
          <div className='flex items-center space-x-2 mb-8'>
            <h2 className='text-lg font-bold text-white'>At a Glance</h2>
            <span className='material-icons text-sm text-white transform rotate-0'>
              chevron_right
            </span>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {(gallery || []).map((url: string, i: number) => (
              <div
                key={i}
                className='aspect-9/16 relative bg-zinc-900 rounded-lg overflow-hidden group hover:opacity-90 transition-opacity cursor-pointer'
              >
                {url ? (
                  <Image
                    src={url}
                    fill
                    className='object-cover'
                    alt='Gallery'
                  />
                ) : (
                  <div className='absolute inset-0 flex items-center justify-center text-zinc-700 font-display text-4xl font-bold opacity-30'>
                    IMG {i + 1}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Quote Section */}
        <section className='flex flex-col items-center text-center space-y-8 mb-32 max-w-3xl mx-auto relative'>
          {/* Decorative Red Block hint from design */}
          <div className='absolute -left-12 top-0 w-24 h-24 bg-primary/20 blur-3xl rounded-full'></div>

          <blockquote className='text-3xl md:text-5xl font-light leading-tight'>
            <span className='text-white'>{quote?.line1}</span>
            <span className='text-zinc-600 line-through decoration-zinc-600 decoration-1'>
              {quote?.line1_strike}
            </span>
            <span className='text-zinc-600'>,</span>
            <br className='hidden md:block' />
            <span className='text-white'>{quote?.line2}</span>
            <span className='text-primary font-medium'>
              {quote?.line2_highlight}
            </span>
            <span className='text-primary'>.</span>
          </blockquote>

          <div className='pt-8'>
            <div className='font-script text-5xl md:text-6xl text-white opacity-80 rotate-[-5deg]'>
              {quote?.signature}
            </div>
          </div>
        </section>
      </main>

      <Footer settings={globalSettings} />
    </div>
  );
}
