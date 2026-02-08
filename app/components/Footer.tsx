import { defaultSettings } from '@/app/lib/settings-constants';
import Link from 'next/link';

export default function Footer({
  settings = defaultSettings.global,
}: {
  settings?: any;
}) {
  const { footer } = settings;
  // Fallback if settings are missing (e.g. partial updates)
  const contactEmail = footer?.email || 'duongminhle@gmail.com';
  const contactPhone = footer?.phone || '+91 9890690762';
  const locations = footer?.location || [
    'Gandhinagar, Gujarat',
    'Pune, Maharashtra',
  ];
  const socials = footer?.socials || {
    instagram: '#',
    linkedin: '#',
    behance: '#',
  };

  return (
    <footer className='bg-surface-dark dark:bg-black text-white pt-12 md:pt-20 pb-8 border-t border-border-dark'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 md:mb-20'>
          <div>
            <h5 className='text-xs font-bold text-gray-500 uppercase tracking-widest mb-6'>
              Get In Touch
            </h5>
            <a
              className='block text-xl md:text-2xl hover:text-primary transition-colors mb-2'
              href={`mailto:${contactEmail}`}
            >
              {contactEmail}
            </a>
            <p className='text-xl text-gray-400 font-light'>
              <span className='text-primary font-bold'>+</span>
              {contactPhone.replace('+', '')}
            </p>
          </div>
          <div>
            <h5 className='text-xs font-bold text-gray-500 uppercase tracking-widest mb-6'>
              Location
            </h5>
            {locations.map((loc: string, index: number) => (
              <p key={index} className='text-xl font-light'>
                {loc}
              </p>
            ))}
          </div>
          <div>
            <h5 className='text-xs font-bold text-gray-500 uppercase tracking-widest mb-6'>
              Find Me Here
            </h5>
            <div className='flex space-x-4'>
              <Link
                className='w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300'
                href={socials.instagram}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='font-bold text-sm'>IG</span>
              </Link>
              <Link
                className='w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300'
                href={socials.linkedin}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='font-bold text-sm'>in</span>
              </Link>
              <a
                className='w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300'
                href={socials.behance}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='font-bold text-sm'>Bē</span>
              </a>
              <Link
                className='w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300'
                href={`mailto:${contactEmail}`}
              >
                <span className='material-icons text-sm'>mail</span>
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-t border-gray-900 pt-8 uppercase tracking-widest'>
          <p>© 2025 Duong Minh Le. All right reserved</p>
          <div className='flex space-x-6 my-4 md:my-0'>
            <Link className='hover:text-white transition-colors' href='/about'>
              About
            </Link>
            <Link
              className='hover:text-white transition-colors'
              href='/projects'
            >
              Projects
            </Link>
            <Link
              className='hover:text-white transition-colors'
              href='/etcetra'
            >
              Etcetra
            </Link>
          </div>
          <div className='flex items-center space-x-2 bg-white text-black px-3 py-1 rounded cursor-pointer hover:bg-gray-200 transition-colors'>
            <span className='material-icons text-sm'>design_services</span>
            <span className='font-bold text-[10px]'>Duong Minh Le</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
