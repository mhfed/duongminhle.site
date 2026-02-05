import Image from 'next/image';

const projects = [
  {
    id: 1,
    role: 'UX Research; Interface Design',
    title: 'Artceps',
    duration: '3 months',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAlmBnqxDIGkyaRz5CIIlAXGjnekmVgmaLmLXInLYWMiAYL3uldmjk9TOAxh9DnFF9eQvJhCOYF8R3BYFp8i_O4MJ7WbmvpF9_jxGmkM8FqeP3bIZvQG52A5Ldu33nNFHgqN_batKo0mJ8bgoqIfwAC5bWD8GOv_BPPan7bExe0_tSn_HR08SSeiTPJpRzHniHFHtmkgu0qnQMccxTvlTcNrreZAPxSPRtPoflY3eEGc-YUdqJoJQhoRESjZ4PTkTocz0x3uYW2CoNc',
    alt: 'Mobile App Mockup',
    roleColor: 'text-gray-500', // Default color
  },
  {
    id: 2,
    role: 'Service Design',
    title: 'Sahayak',
    duration: '2 months',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIGqsINpCsqNyBlBEKSgsJR_HvTgVqrUg0iWD2pkEw2lnG5b9chFl1P9OfiK7gkU_14U8_gvj0YBZnP65qz5pT1AJw5iZXTBUEmojQlTZhPatF4M5vXJJeUf2jcNfUT7mjzXlrPSiSdGdnn2hDSxOhhcRRFtycjuSkUkVGCLLP61adr8nlfkCX-KsnYyuDrItHXEa3Cl-PzDJpprooJnDDpxOEt4lpV69wALdbaCbTv7b2oOR7Qblzqax0fCDDx3KDPS5f-pYNgGfl',
    alt: 'Sahayak App Mockup',
    roleColor: 'text-gray-500',
  },
  {
    id: 3,
    role: 'INTERNSHIP',
    title: 'STEMpedia',
    duration: '5 months',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDWp9Rdpeglq-S9p5NgLPUhhNHzI7q4NNbCEN26tDh8fDiBiNtQUQBTsji3R0KcNK4B2tvwHoiEQbbVj6ODg7OftLe-1EQxi8R63_19S4y6Mday63ASXCouB0ARJalaGFj0GxxnT2QF-8Jpa5xG1NYaliWhfOF3vN6g6ijqpBuFpGr59YFaupjTZNlT24U92vzy1hlGf_9AZYyaPnHhhFF7UAZujH6gOFdawORjADEnhVBEQAp78dP1ODfdrJKKNS6qcYIltX2YmrGh',
    alt: 'Dashboard Mockup',
    roleColor: 'text-primary', // Highlighted color
  },
  {
    id: 4,
    role: 'INTERNSHIP',
    title: 'Benjamins Money',
    duration: '5 months',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDiAlpHrOkl164OqIK1OZ8t94TR_wIAiv6t5C93fnGGXISapldBsiBCaxQt67cEN0PuAx3cgbevz3oKptQE43IKBd-WjFoaDMIFMqw2s0FY4Lu3Ce3SbL8qVH_NhCGwoxv35rzu0eL8U8A4RTIjLtIvCYjGymOEo4wTBwWbzUo97_U1gRrXks66mp28IqQYoYTuiTb3Indz-79ms7kVMgmsC_94X8ybDUaj1D5fq2k3ctNrj6gPdhPK96rRCBTVPX9RNk_FNpt_fChG',
    alt: 'Fintech Web Mockup',
    roleColor: 'text-gray-500',
  },
];

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

      {projects.map((project) => (
        <div
          key={project.id}
          className='border-t border-border-light dark:border-border-dark group reveal-on-scroll'
        >
          <div className='grid grid-cols-1 lg:grid-cols-12 min-h-[500px]'>
            {/* Left Content */}
            <div className='lg:col-span-4 p-8 lg:p-12 flex flex-col justify-between border-r border-border-light dark:border-border-dark transition-colors duration-300 group-hover:bg-surface-dark/20'>
              <div>
                <span
                  className={`text-xs font-bold tracking-widest uppercase mb-2 block ${project.roleColor}`}
                >
                  {project.role}
                </span>
                <h3 className='text-4xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors'>
                  {project.title}
                </h3>
              </div>
              <div className='flex items-end justify-between mt-12'>
                <div>
                  <span className='text-xs uppercase text-gray-500 block'>
                    Duration
                  </span>
                  <span className='text-sm font-medium'>
                    {project.duration}
                  </span>
                </div>
                <div
                  className={`w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 transform group-hover:scale-110 ${
                    project.id === 3 ? 'bg-white text-black' : ''
                  }`}
                >
                  <span className='material-icons transform -rotate-45'>
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className='lg:col-span-8 bg-surface-dark relative overflow-hidden p-6'>
              <div className='relative w-full h-full overflow-hidden'>
                <Image
                  alt={project.alt}
                  className='object-cover transform transition-transform duration-700 group-hover:scale-105'
                  src={project.image}
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
