import Image from 'next/image';
import { defaultSettings } from '@/app/lib/settings';

export default function Hero({
  settings = defaultSettings.hero,
}: {
  settings?: any;
}) {
  const { title, subtitle, bio, images } = settings;

  // Fallbacks
  const firstName = title?.first || 'Duong';
  const lastName = title?.last || 'Minh Le';
  const subLine1 = subtitle?.line1 || 'Every Detail Tells A';
  const subLine2 = subtitle?.line2 || 'Story Worth';
  const highlight = subtitle?.highlight || 'Exploring';
  const bioText =
    bio ||
    "I'm a User Experience Designer, artist and storyteller. I believe in solving meaningful problems through elegant, creative solutions. My passion lies in the subtle intersection of art and technology.\n\nCurrently studying Interaction Design, B.Des at UID, Gujarat";

  const img1 =
    images?.img1 ||
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD7BfwYkJ3wuAlEYcxseZvzLefQYzqAA4iH0dPyn4BdYhZN24dTL01WOHCrn3FP_L4Xmwg4dfQBHawF8g5CYK2RLRQ6OkfJbEJBr6g2FTQluSJww3W1SwMM-d4CKCRMPXMH2GdxNBW8IXSgKjCK6IPzo-qJIXxIxG3IAHSC81BIbrlwuSTB0kS_7XJBcEg0_mFOyU1ylgQJfWNpqeRXijIl6tD0oFtVehfcAii_J5bIK-vVa18cozT7PJoqnfSj4B4fqIFnQMm3jPLE';
  const img2 =
    images?.img2 ||
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAqSao1pwF2Yzq9R9GxW1uatJTUCwn39iZw8PG1Dil7nrBas30T26LKQkJumeOjbJbMEUHlaW4ywsI7c8DBwCm1LOmrccghm1K5brY2bGI_2QO3G_CNCzzfFSaoIOj_UdbOnItuXMN_ybRnWs1upEZHrfxiG1W4C16C9EZtqxJKJmHnEFJ4qlpkD6O9xdIqF7A_aPKFq49RuNRFzoaLJVBb50nCDrd5nZHOgutlGQWmQkjppWjsZeS-P_Ay8b5VfFHE07Fy6uR8H5Sa';
  const img3 =
    images?.img3 ||
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDByAZlq0YuAu_NWfEPItpBexhie27_nPbzic9qIc7xEaSVWMqLneVUM0pYQx5pR-1jcHGDZuf8O6fkmdCesDMEIyb6gTdGuYbSUtY9FssIeauSLMxILqXs8AIbCUCEgYUW7HHxjH_lOpnd3bMHa3VJt8YeSyhJ-YoUWQrI_SJSbOKSenY_d698g4pbGwPfYmQqjI7XNJ1AD_LN7KrtuKrcC9T0Q3Eox7UyhdAaG61B8ayuKbYpSFf-qqe-FT1MR8eu4EzLffOfP9iL';
  const img4 =
    images?.img4 ||
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDrKyl_SXfYwE425QFtax06f_VoRuRZaTMDM0nTEpdClw8w7IVGDm2W1siTNELDh9ApMyDteTEz5w0q5VPtFwnPjvsWX-G0DPmbt3CV-Pi2tEHf8bbC67a8CLzFf4jEHAIyf7Ts66rbH4Cdj7AsGmSnDZuaDGX4DdRbG_KwuFmk614xSB3R9TFSO-kOQ5Hug2ChgMwtbPF0PFoQiRfczbOby3y3ZsqVxXQcuenMKfMgHORYLCah4pIuV50li6kQjJ2B81eZulyrU0i2';

  return (
    <header
      className='relative h-screen flex flex-col pt-24 border-b border-border-light dark:border-border-dark overflow-hidden'
      id='about'
    >
      {/* Background Grid */}
      <div className='absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none z-0'></div>

      {/* Main Grid Container */}
      <div className='px-6 h-full relative z-10 pb-12 box-border'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 h-full relative z-10'>
          {/* 1. Top Left: Name */}
          <div className='border-b lg:border-r border-border-light dark:border-gray-800 p-8 md:p-12 relative flex flex-col justify-center'>
            <div className='flex items-start justify-between'>
              <div className='reveal-on-scroll hero-title'>
                <h1 className='text-6xl md:text-8xl font-display font-bold leading-none uppercase tracking-tighter'>
                  {firstName}
                  <br />
                  {lastName}
                </h1>
              </div>
              <div className='hidden md:flex w-24 h-24 bg-primary text-white items-center justify-center shrink-0 ml-4 shadow-lg shadow-primary/30 animate-[pulse_3s_ease-in-out_infinite]'>
                <svg
                  fill='currentColor'
                  height='60'
                  viewBox='0 0 24 24'
                  width='60'
                >
                  <path d='M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z'></path>
                </svg>
              </div>
            </div>
          </div>

          {/* 2. Top Right: Statement */}
          <div className='border-b border-border-light dark:border-gray-800 p-8 md:p-12 flex flex-col justify-end relative'>
            <div className='absolute inset-0 bg-grid-light dark:bg-grid-dark bg-grid opacity-[0.05] dark:opacity-[0.05] pointer-events-none z-0'></div>
            <div className='absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20 hidden lg:block z-10'></div>
            <div className='reveal-on-scroll relative z-10'>
              <h2 className='text-4xl md:text-5xl font-display font-bold leading-tight'>
                {subLine1}
                <br />
                {subLine2}
                <br />
                <span className='font-script text-6xl text-gray-500 font-normal lowercase ml-2 border-b-2 border-primary/50 inline-block pb-2'>
                  {highlight}
                </span>
              </h2>
            </div>
          </div>

          {/* 3. Bottom Left: Bio */}
          <div className='lg:border-r border-border-light dark:border-gray-800 p-8 md:p-12 flex flex-col justify-between relative'>
            <div className='absolute inset-0 bg-grid-light dark:bg-grid-dark bg-grid opacity-[0.05] dark:opacity-[0.05] pointer-events-none z-0'></div>
            <div className='max-w-md text-gray-600 dark:text-gray-400 text-lg leading-relaxed reveal-on-scroll relative z-10 whitespace-pre-wrap'>
              {bioText}
            </div>
            <div className='mt-8 flex items-center space-x-4 reveal-on-scroll relative z-10'>
              <div className='h-10 w-0.5 bg-primary'></div>
              <span className='text-xs tracking-widest uppercase text-gray-500 font-bold'>
                Scroll
              </span>
              <span className='material-icons text-primary animate-bounce'>
                arrow_downward
              </span>
            </div>
          </div>

          {/* 4. Bottom Right: Image Grid */}
          <div className='p-0 relative overflow-hidden group h-full'>
            <div className='grid grid-cols-2 h-full p-4'>
              <div className='relative border-r border-b border-gray-800/50 grayscale hover:grayscale-0 transition-all duration-500'>
                <Image
                  src={img1}
                  alt='Grid Image 1'
                  fill
                  className='object-cover opacity-60 hover:opacity-100 transition-opacity'
                />
              </div>
              <div className='relative border-b border-gray-800/50 grayscale hover:grayscale-0 transition-all duration-500'>
                <Image
                  src={img2}
                  alt='Grid Image 2'
                  fill
                  className='object-cover opacity-60 hover:opacity-100 transition-opacity'
                />
              </div>
              <div className='relative border-r border-gray-800/50 grayscale hover:grayscale-0 transition-all duration-500'>
                <div className='absolute inset-0 flex items-center justify-center z-20 pointer-events-none'>
                  <span className='material-icons text-white/50 text-4xl'>
                    play_circle
                  </span>
                </div>
                <Image
                  src={img3}
                  alt='Grid Image 3'
                  fill
                  className='object-cover opacity-60 hover:opacity-100 transition-opacity'
                />
              </div>
              <div className='relative grayscale hover:grayscale-0 transition-all duration-500'>
                <Image
                  src={img4}
                  alt='Grid Image 4'
                  fill
                  className='object-cover opacity-60 hover:opacity-100 transition-opacity'
                />
              </div>
            </div>

            <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
              <div className='w-full h-px bg-transparent'></div>
              <div className='h-full w-px bg-transparent'></div>
              <span className='material-icons text-white/20 text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
