import { defaultSettings } from '@/app/lib/settings';

export default function AboutTransition({
  settings = defaultSettings.about_transition,
}: {
  settings?: any;
}) {
  const { text, buttonText } = settings;
  const displayText = text || "But my work doesn't stop here.";
  const displayButtonText = buttonText || 'Check out ETCETRA →';

  return (
    <section className='py-24 bg-surface-dark dark:bg-[#080808] text-center relative overflow-hidden reveal-on-scroll'>
      <span className='hidden md:block absolute left-10 top-1/2 transform -translate-y-1/2 text-[20rem] text-gray-800 dark:text-[#141414] font-display leading-none z-0 opacity-50'>
        “
      </span>
      <span className='hidden md:block absolute right-10 top-1/2 transform -translate-y-1/2 text-[20rem] text-gray-800 dark:text-[#141414] font-display leading-none z-0 rotate-180 opacity-50'>
        “
      </span>
      <div className='relative z-10'>
        <h3 className='text-3xl md:text-4xl font-medium mb-8 text-white'>
          {displayText}
        </h3>
        <a
          className='inline-block px-8 py-3 rounded-full border border-gray-500 text-white hover:bg-white hover:text-black hover:scale-110 hover:shadow-lg transition-all duration-300 uppercase text-sm tracking-widest'
          href='#etcetra'
        >
          {displayButtonText}
        </a>
      </div>
    </section>
  );
}
