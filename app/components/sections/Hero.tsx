import Image from 'next/image';

export default function Hero() {
  return (
    <header
      className='relative min-h-screen flex flex-col pt-24 border-b border-border-light dark:border-border-dark'
      id='about'
    >
      <div className='absolute inset-0 opacity-20 pointer-events-none z-0'></div>
      <div className='container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 grow'>
        <div className='flex flex-col justify-center'>
          <div className='relative mb-8 reveal-on-scroll hero-title'>
            <h1 className='text-6xl md:text-8xl font-display font-bold leading-none uppercase tracking-tighter'>
              Duong
              <br />
              Minh Le
            </h1>
            <div className='hidden md:flex absolute top-0 right-10 lg:right-20 w-24 h-24 bg-primary text-white items-center justify-center shadow-lg shadow-primary/30 animate-[pulse_3s_ease-in-out_infinite]'>
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
          <div className='max-w-md text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-12 reveal-on-scroll'>
            I&apos;m a User Experience Designer, artist and storyteller. I
            believe in solving meaningful problems through elegant, creative
            solutions. My passion lies in the subtle intersection of art and
            technology.
            <br />
            <br />
            Currently studying Interaction Design, B.Des at UID, Gujarat
          </div>
          <div className='mt-auto pb-12 flex items-center space-x-4 reveal-on-scroll'>
            <div className='h-10 w-0.5 bg-primary'></div>
            <span className='text-xs tracking-widest uppercase text-gray-500 font-bold'>
              Scroll
            </span>
            <span className='material-icons text-primary animate-bounce'>
              arrow_downward
            </span>
          </div>
        </div>
        <div className='flex flex-col border-l border-border-light dark:border-border-dark pl-0 reveal-on-scroll'>
          <div className='mb-12'>
            <h2 className='text-4xl md:text-5xl font-display font-bold leading-tight'>
              Every Detail Tells A<br />
              Story Worth
              <br />
              <span className='font-script text-6xl text-gray-400 dark:text-gray-500 font-normal lowercase ml-2'>
                Exploring
              </span>
            </h2>
          </div>
          <div className='grid grid-cols-2 gap-4 mt-auto mb-12'>
            <div className='aspect-video bg-gray-800 relative overflow-hidden group rounded-sm project-image-container'>
              <Image
                alt='Design work sketch'
                className='object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 transform'
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuD7BfwYkJ3wuAlEYcxseZvzLefQYzqAA4iH0dPyn4BdYhZN24dTL01WOHCrn3FP_L4Xmwg4dfQBHawF8g5CYK2RLRQ6OkfJbEJBr6g2FTQluSJww3W1SwMM-d4CKCRMPXMH2GdxNBW8IXSgKjCK6IPzo-qJIXxIxG3IAHSC81BIbrlwuSTB0kS_7XJBcEg0_mFOyU1ylgQJfWNpqeRXijIl6tD0oFtVehfcAii_J5bIK-vVa18cozT7PJoqnfSj4B4fqIFnQMm3jPLE'
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
            <div className='aspect-video bg-gray-800 relative overflow-hidden group rounded-sm project-image-container'>
              <Image
                alt='Team collaboration'
                className='object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 transform'
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuAqSao1pwF2Yzq9R9GxW1uatJTUCwn39iZw8PG1Dil7nrBas30T26LKQkJumeOjbJbMEUHlaW4ywsI7c8DBwCm1LOmrccghm1K5brY2bGI_2QO3G_CNCzzfFSaoIOj_UdbOnItuXMN_ybRnWs1upEZHrfxiG1W4C16C9EZtqxJKJmHnEFJ4qlpkD6O9xdIqF7A_aPKFq49RuNRFzoaLJVBb50nCDrd5nZHOgutlGQWmQkjppWjsZeS-P_Ay8b5VfFHE07Fy6uR8H5Sa'
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
            <div className='aspect-video bg-gray-900 relative overflow-hidden group cursor-pointer rounded-sm project-image-container'>
              <div className='absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-300 group-hover:opacity-0'>
                <span className='material-icons text-white mr-2'>
                  touch_app
                </span>
                <span className='text-xs uppercase tracking-widest text-white'>
                  Click to Reveal
                </span>
              </div>
              <Image
                alt='Presentation'
                className='object-cover opacity-40 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 transform'
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuDByAZlq0YuAu_NWfEPItpBexhie27_nPbzic9qIc7xEaSVWMqLneVUM0pYQx5pR-1jcHGDZuf8O6fkmdCesDMEIyb6gTdGuYbSUtY9FssIeauSLMxILqXs8AIbCUCEgYUW7HHxjH_lOpnd3bMHa3VJt8YeSyhJ-YoUWQrI_SJSbOKSenY_d698g4pbGwPfYmQqjI7XNJ1AD_LN7KrtuKrcC9T0Q3Eox7UyhdAaG61B8ayuKbYpSFf-qqe-FT1MR8eu4EzLffOfP9iL'
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
            <div className='aspect-video bg-gray-800 relative overflow-hidden group rounded-sm project-image-container'>
              <Image
                alt='Wireframing'
                className='object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 transform'
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuDrKyl_SXfYwE425QFtax06f_VoRuRZaTMDM0nTEpdClw8w7IVGDm2W1siTNELDh9ApMyDteTEz5w0q5VPtFwnPjvsWX-G0DPmbt3CV-Pi2tEHf8bbC67a8CLzFf4jEHAIyf7Ts66rbH4Cdj7AsGmSnDZuaDGX4DdRbG_KwuFmk614xSB3R9TFSO-kOQ5Hug2ChgMwtbPF0PFoQiRfczbOby3y3ZsqVxXQcuenMKfMgHORYLCah4pIuV50li6kQjJ2B81eZulyrU0i2'
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
