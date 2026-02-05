import Image from 'next/image';

export default function Projects() {
  return (
    <section
      className='border-b border-border-light dark:border-border-dark scroll-mt-20'
      id='projects'
    >
      <div className='container mx-auto px-6 py-16 flex items-end reveal-on-scroll'>
        <div className='flex items-start'>
          <svg
            className='text-white fill-current w-16 h-16 md:w-24 md:h-24 mr-4'
            viewBox='0 0 100 100'
          >
            <rect
              className='text-white'
              height='35'
              width='35'
              x='0'
              y='0'
            ></rect>
            <rect
              className='text-gray-600'
              height='35'
              width='35'
              x='45'
              y='0'
            ></rect>
            <path className='text-white' d='M0 50 L35 50 L35 85 L0 50 Z'></path>
          </svg>
          <h2 className='text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter self-center ml-4'>
            Projects
          </h2>
        </div>
      </div>
      <div className='border-t border-border-light dark:border-border-dark group reveal-on-scroll'>
        <div className='grid grid-cols-1 lg:grid-cols-12 min-h-[500px]'>
          <div className='lg:col-span-4 p-8 lg:p-12 flex flex-col justify-between border-r border-border-light dark:border-border-dark transition-colors duration-300 group-hover:bg-surface-dark/20'>
            <div>
              <span className='text-xs font-bold tracking-widest uppercase text-gray-500 mb-2 block'>
                UX Research; Interface Design
              </span>
              <h3 className='text-4xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors'>
                Artceps
              </h3>
            </div>
            <div className='flex items-end justify-between mt-12'>
              <div>
                <span className='text-xs uppercase text-gray-500 block'>
                  Duration
                </span>
                <span className='text-sm font-medium'>3 months</span>
              </div>
              <div className='w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 transform group-hover:scale-110'>
                <span className='material-icons transform -rotate-45'>
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
          <div className='lg:col-span-8 bg-surface-dark relative overflow-hidden flex items-center justify-center p-8'>
            <div className='absolute inset-0 bg-linear-to-br from-black via-gray-900 to-black opacity-90 transition-opacity group-hover:opacity-100'></div>
            <div className='absolute top-10 right-10 w-64 h-64 bg-gray-800 rounded-full mix-blend-overlay filter blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700'></div>
            <div className='relative z-10 w-full max-w-4xl flex items-center justify-center space-x-8 project-image-container'>
              <Image
                alt='Mobile App Mockup'
                className='object-contain rounded-3xl shadow-2xl transform'
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuAlmBnqxDIGkyaRz5CIIlAXGjnekmVgmaLmLXInLYWMiAYL3uldmjk9TOAxh9DnFF9eQvJhCOYF8R3BYFp8i_O4MJ7WbmvpF9_jxGmkM8FqeP3bIZvQG52A5Ldu33nNFHgqN_batKo0mJ8bgoqIfwAC5bWD8GOv_BPPan7bExe0_tSn_HR08SSeiTPJpRzHniHFHtmkgu0qnQMccxTvlTcNrreZAPxSPRtPoflY3eEGc-YUdqJoJQhoRESjZ4PTkTocz0x3uYW2CoNc'
                width={400}
                height={400}
                style={{ width: 'auto', height: '400px' }}
              />
              <div className='hidden md:block text-gray-300 max-w-xs transform translate-y-4 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100'>
                <h4 className='text-xl font-bold mb-2 text-white'>
                  Connect with movies, people
                </h4>
                <p className='text-sm text-gray-400'>
                  and cinema more than ever.
                </p>
                <div className='mt-4 flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-gray-800 rounded-full text-xs text-primary border border-gray-700 hover:border-primary transition-colors'>
                    Qualitative Analysis
                  </span>
                  <span className='px-3 py-1 bg-gray-800 rounded-full text-xs text-primary border border-gray-700 hover:border-primary transition-colors'>
                    Research
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t border-border-light dark:border-border-dark group reveal-on-scroll'>
        <div className='grid grid-cols-1 lg:grid-cols-12 min-h-[500px]'>
          <div className='lg:col-span-4 p-8 lg:p-12 flex flex-col justify-between border-r border-border-light dark:border-border-dark transition-colors duration-300 group-hover:bg-surface-dark/20'>
            <div>
              <span className='text-xs font-bold tracking-widest uppercase text-gray-500 mb-2 block'>
                Service Design
              </span>
              <h3 className='text-4xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors'>
                Sahayak
              </h3>
            </div>
            <div className='flex items-end justify-between mt-12'>
              <div>
                <span className='text-xs uppercase text-gray-500 block'>
                  Duration
                </span>
                <span className='text-sm font-medium'>2 months</span>
              </div>
              <div className='w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 transform group-hover:scale-110'>
                <span className='material-icons transform -rotate-45'>
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
          <div className='lg:col-span-8 bg-surface-dark relative overflow-hidden flex items-center justify-center p-8'>
            <div className='absolute inset-0 bg-linear-to-bl from-gray-900 via-black to-gray-900 opacity-90'></div>
            <div className='relative z-10 w-full max-w-4xl flex items-center justify-center space-x-8 project-image-container'>
              <Image
                alt='Sahayak App Mockup'
                className='object-contain rounded-3xl shadow-2xl transform'
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuBIGqsINpCsqNyBlBEKSgsJR_HvTgVqrUg0iWD2pkEw2lnG5b9chFl1P9OfiK7gkU_14U8_gvj0YBZnP65qz5pT1AJw5iZXTBUEmojQlTZhPatF4M5vXJJeUf2jcNfUT7mjzXlrPSiSdGdnn2hDSxOhhcRRFtycjuSkUkVGCLLP61adr8nlfkCX-KsnYyuDrItHXEa3Cl-PzDJpprooJnDDpxOEt4lpV69wALdbaCbTv7b2oOR7Qblzqax0fCDDx3KDPS5f-pYNgGfl'
                width={400}
                height={400}
                style={{ width: 'auto', height: '400px' }}
              />
              <div className='hidden md:block bg-white text-black p-6 rounded-lg shadow-lg max-w-xs transform translate-y-12 group-hover:translate-y-8 transition-transform duration-500'>
                <h4 className='font-bold mb-2'>
                  Connect with the right househelp easily.
                </h4>
                <div className='w-full h-2 bg-gray-200 rounded mt-2'>
                  <div className='w-2/3 h-full bg-orange-500 rounded'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t border-border-light dark:border-border-dark group reveal-on-scroll'>
        <div className='grid grid-cols-1 lg:grid-cols-12 min-h-[500px]'>
          <div className='lg:col-span-4 p-8 lg:p-12 flex flex-col justify-between border-r border-border-light dark:border-border-dark transition-colors duration-300 group-hover:bg-surface-dark/20'>
            <div>
              <span className='text-xs font-bold tracking-widest uppercase text-primary mb-2 block'>
                INTERNSHIP
              </span>
              <h3 className='text-4xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors'>
                STEMpedia
              </h3>
            </div>
            <div className='flex items-end justify-between mt-12'>
              <div>
                <span className='text-xs uppercase text-gray-500 block'>
                  Duration
                </span>
                <span className='text-sm font-medium'>5 months</span>
              </div>
              <div className='w-12 h-12 rounded-full border border-gray-600 bg-white text-black flex items-center justify-center group-hover:scale-125 group-hover:shadow-lg transition-all duration-300'>
                <span className='material-icons transform -rotate-45'>
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
          <div className='lg:col-span-8 bg-surface-dark relative overflow-hidden flex items-center justify-center p-8'>
            <div className='absolute inset-0 bg-[#0a0f0d]'></div>
            <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-black to-transparent'></div>
            <div className='relative z-10 w-full flex items-center justify-center flex-col project-image-container'>
              <Image
                alt='Dashboard Mockup'
                className='rounded-lg shadow-2xl border border-gray-800 transform'
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuDWp9Rdpeglq-S9p5NgLPUhhNHzI7q4NNbCEN26tDh8fDiBiNtQUQBTsji3R0KcNK4B2tvwHoiEQbbVj6ODg7OftLe-1EQxi8R63_19S4y6Mday63ASXCouB0ARJalaGFj0GxxnT2QF-8Jpa5xG1NYaliWhfOF3vN6g6ijqpBuFpGr59YFaupjTZNlT24U92vzy1hlGf_9AZYyaPnHhhFF7UAZujH6gOFdawORjADEnhVBEQAp78dP1ODfdrJKKNS6qcYIltX2YmrGh'
                width={800}
                height={600}
                style={{ width: '75%', height: 'auto' }}
              />
              <p className='mt-6 text-gray-400 text-sm max-w-md text-center transform group-hover:text-white transition-colors'>
                Worked as a UI/UX Designer at STEMpedia (EdTech Company)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t border-border-light dark:border-border-dark group reveal-on-scroll'>
        <div className='grid grid-cols-1 lg:grid-cols-12 min-h-[500px]'>
          <div className='lg:col-span-4 p-8 lg:p-12 flex flex-col justify-between border-r border-border-light dark:border-border-dark transition-colors duration-300 group-hover:bg-surface-dark/20'>
            <div>
              <span className='text-xs font-bold tracking-widest uppercase text-gray-500 mb-2 block'>
                INTERNSHIP
              </span>
              <h3 className='text-4xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors'>
                Benjamins Money
              </h3>
            </div>
            <div className='flex items-end justify-between mt-12'>
              <div>
                <span className='text-xs uppercase text-gray-500 block'>
                  Duration
                </span>
                <span className='text-sm font-medium'>5 months</span>
              </div>
              <div className='w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 transform group-hover:scale-110'>
                <span className='material-icons transform -rotate-45'>
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
          <div className='lg:col-span-8 bg-surface-dark relative overflow-hidden flex items-center justify-center p-8'>
            <div className='absolute inset-0 bg-black'></div>
            <svg
              className='absolute inset-0 w-full h-full opacity-20'
              preserveAspectRatio='none'
              viewBox='0 0 100 100'
            >
              <path d='M0 100 C 20 0 50 0 100 100 Z' fill='#333'></path>
            </svg>
            <div className='relative z-10 flex flex-col items-center project-image-container'>
              <Image
                alt='Fintech Web Mockup'
                className='rounded-lg shadow-2xl transform'
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuDiAlpHrOkl164OqIK1OZ8t94TR_wIAiv6t5C93fnGGXISapldBsiBCaxQt67cEN0PuAx3cgbevz3oKptQE43IKBd-WjFoaDMIFMqw2s0FY4Lu3Ce3SbL8qVH_NhCGwoxv35rzu0eL8U8A4RTIjLtIvCYjGymOEo4wTBwWbzUo97_U1gRrXks66mp28IqQYoYTuiTb3Indz-79ms7kVMgmsC_94X8ybDUaj1D5fq2k3ctNrj6gPdhPK96rRCBTVPX9RNk_FNpt_fChG'
                width={800}
                height={600}
                style={{ width: '75%', height: 'auto' }}
              />
              <div className='mt-8 bg-gray-900 p-4 rounded border border-gray-700 max-w-sm transform group-hover:translate-y-2 transition-transform duration-300'>
                <p className='text-sm text-gray-300'>
                  Worked as a UI/UX Designer at Benjamins Money (US-based
                  fintech company)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
