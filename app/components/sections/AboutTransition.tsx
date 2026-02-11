import { defaultSettings } from '@/app/lib/settings-constants';
import Link from 'next/link';

export default function AboutTransition({
  settings = defaultSettings.about_transition,
}: {
  settings?: any;
}) {
  const { text, buttonText } = settings;
  const displayText = text || "But my work doesn't stop here.";
  const displayButtonText = buttonText || 'Check out ETCETRA →';

  return (
    <section className='py-24 px-6 bg-surface-dark dark:bg-[#080808] text-center relative overflow-hidden reveal-on-scroll'>
      <div className='absolute hidden left-10 top-1/2 transform -translate-y-1/2 text-[20rem] md:flex w-24 h-24 bg-primary text-white items-center justify-center shrink-0 ml-4 shadow-lg shadow-primary/30 animate-[pulse_3s_ease-in-out_infinite] rotate-180'>
        <svg fill='currentColor' height='60' viewBox='0 0 24 24' width='60'>
          <path d='M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z'></path>
        </svg>
      </div>
      <div className='absolute hidden right-10 top-1/2 transform -translate-y-1/2 text-[20rem] md:flex w-24 h-24 bg-primary text-white items-center justify-center shrink-0 ml-4 shadow-lg shadow-primary/30 animate-[pulse_3s_ease-in-out_infinite]'>
        <svg fill='currentColor' height='60' viewBox='0 0 24 24' width='60'>
          <path d='M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z'></path>
        </svg>
      </div>
      <div className='relative z-10'>
        <h3 className='text-3xl md:text-4xl font-medium mb-8 text-white'>
          {displayText}
        </h3>
        <Link
          className='inline-block px-8 py-3 rounded-full border border-gray-500 text-white hover:bg-white hover:text-black hover:scale-110 hover:shadow-lg transition-all duration-300 uppercase text-sm tracking-widest'
          href='/etcetra'
        >
          {displayButtonText}
        </Link>
      </div>
    </section>
  );
}
