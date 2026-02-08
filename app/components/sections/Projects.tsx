import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  role: string;
  duration: string;
  image: string;
  alt: string;
  link?: string | null;
  roleColor: string;
}

export default function Projects({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) {
    return null; // Or a placeholder
  }

  return (
    <section
      className='border-b border-border-light dark:border-border-dark scroll-mt-20'
      id='projects'
    >
      <div className='container mx-auto px-6 py-16 flex items-end reveal-on-scroll'>
        <div className='flex items-start'>
          <svg
            className='text-white fill-current w-12 h-12 md:w-24 md:h-24 mr-4'
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
          <h2 className='text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter self-center ml-4'>
            Projects
          </h2>
        </div>
      </div>

      {projects.map((project) => {
        const ProjectContent = (
          <div className='grid grid-cols-1 lg:grid-cols-12 min-h-auto lg:min-h-[500px]'>
            {/* Left Content */}
            <div className='lg:col-span-4 p-6 md:p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border-light dark:border-border-dark transition-colors duration-300 group-hover:bg-surface-dark/20 order-2 lg:order-1'>
              <div>
                <span
                  className={`text-xs font-bold tracking-widest uppercase mb-2 block ${project.roleColor}`}
                >
                  {project.role}
                </span>
                <h3 className='text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors'>
                  {project.title}
                </h3>
              </div>
              <div className='flex items-end justify-between mt-8 lg:mt-12'>
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
                    project.roleColor === 'text-primary'
                      ? 'bg-white text-black'
                      : ''
                  }`}
                >
                  <span className='material-icons transform -rotate-45'>
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className='lg:col-span-8 bg-surface-dark relative overflow-hidden p-0 lg:p-6 order-1 lg:order-2 h-[300px] lg:h-auto'>
              <div className='project-image-container relative w-full h-full overflow-hidden'>
                <Image
                  alt={project.alt || 'Project Image'}
                  className='object-cover transform transition-transform duration-700 group-hover:scale-105'
                  src={project.image}
                  fill
                />
              </div>
            </div>
          </div>
        );

        return (
          <div
            key={project.id}
            className='border-t border-border-light dark:border-border-dark group reveal-on-scroll'
          >
            {project.link ? (
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='block'
              >
                {ProjectContent}
              </a>
            ) : (
              ProjectContent
            )}
          </div>
        );
      })}
    </section>
  );
}
