import Image from 'next/image';

export default function Etcetra() {
  return (
    <section
      className='relative py-32 overflow-hidden bg-background-light dark:bg-background-dark scroll-mt-20'
      id='etcetra'
    >
      <div className='absolute inset-0 bg-grid-light dark:bg-grid-dark bg-grid opacity-20 pointer-events-none'></div>
      <div className='container mx-auto px-6 relative z-10 min-h-[600px] flex items-center justify-center reveal-on-scroll'>
        <h2 className='text-5xl md:text-7xl font-display font-bold text-center leading-tight bg-background-light/50 dark:bg-background-dark/50 p-4 relative z-20 backdrop-blur-sm rounded-xl'>
          Not always working
          <br />
          <span className='text-gray-500 dark:text-gray-400'>
            (but always curious)
          </span>
        </h2>
        <div
          className='absolute top-0 left-4 md:top-10 md:left-20 max-w-[200px] p-4 border border-dashed border-gray-400 bg-background-light dark:bg-black transform -rotate-2 hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-help shadow-lg reveal-on-scroll'
          style={{ transitionDelay: '200ms' }}
        >
          <p className='text-sm font-mono text-gray-600 dark:text-gray-300'>
            born with a pencil in hand (always sketching!)
          </p>
        </div>
        <div
          className='absolute bottom-10 left-4 md:bottom-20 md:left-32 max-w-[180px] p-4 bg-background-light dark:bg-black border border-gray-700 hover:border-primary transition-colors duration-300 shadow-xl reveal-on-scroll'
          style={{ transitionDelay: '300ms' }}
        >
          <p className='text-sm font-medium text-gray-600 dark:text-gray-300'>
            falling down TED-Ed video rabbit holes
          </p>
        </div>
        <div
          className='absolute bottom-0 md:bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 md:translate-y-0 reveal-on-scroll'
          style={{ transitionDelay: '400ms' }}
        >
          <div className='w-32 h-32 rounded-full bg-yellow-900/20 flex items-center justify-center p-2 animate-spin-slow hover:animate-none'>
            <div className='text-center text-[10px] uppercase font-bold tracking-tight text-primary p-2 border border-primary rounded-full bg-background-light dark:bg-black'>
              Questions
              <br />
              no one knows
              <br />
              the answer to
            </div>
          </div>
        </div>
        <div
          className='absolute top-20 right-4 md:right-20 flex -space-x-4 reveal-on-scroll'
          style={{ transitionDelay: '500ms' }}
        >
          <Image
            alt='Person'
            className='rounded-full border-2 border-background-dark object-cover hover:z-10 hover:scale-125 transition-transform'
            src='https://lh3.googleusercontent.com/aida-public/AB6AXuC9HcI-HWTdiW5kEdBKlxdEHOXSKn1FgQV4jYBdr6GV3HebKtMO9pUpe6Xh1M0t2ZE31Zf0CGl6qbHxjMKuCJdHnsiWXWwGaZuDDkIJ7Dh-SBtoi8wu4kuDcQE39tZg-naITo4OfuF9s_minrz0nIKm-9NAAQBeifwKAgwwMncxYJ1ZkWDmaFnchjJeR9v7Py1HyhSQ69z8vxY_Y2uN-iANYkuVhQquHNJLZdpX3CVJmHP4eT2hyT71aFJ5W-vf6jOQaBSaYr3qpg1h'
            width={64}
            height={64}
          />
          <Image
            alt='Person'
            className='rounded-full border-2 border-background-dark object-cover grayscale hover:grayscale-0 hover:z-10 hover:scale-125 transition-all'
            src='https://lh3.googleusercontent.com/aida-public/AB6AXuCNhOmSPlVO7Jur0utAveRqaRY1DuIxj-GXVIcn4jhf_Hgd6XBkIe_o1VyfZJa2w4Efv5YKqC9GbZAFr9kiVz9n2Jf1cN-zTDJJCIYAbrf6afsOSDNHhtxmvgAINQ8RHGCoyjkglEbHdVpo--cLoTN29TgJjMAx3pvvCvmeMo_QK9ZTFnrL5tfd887wDFEmiLvX265maqbkSVRyanIB1PJ-l_yYihOxVLEDmU85YiAaobH6Yj5EbWT04vT_vx6OquZ5AUEFDDRrYbQ1'
            width={64}
            height={64}
          />
          <Image
            alt='Person'
            className='rounded-full border-2 border-background-dark object-cover hover:z-10 hover:scale-125 transition-transform'
            src='https://lh3.googleusercontent.com/aida-public/AB6AXuC6tsEQAITpX4LVtjN8_fxxhqqypIBoX0Ipw28iL-07rfxSfhXEPzURfhN9GQA7eEZeqV1aIh4DBpXnXa3oFXdzNJEPII6OjrvmEeIGcn9DXtBZT6NOIz5Z8xhhkmiP2gj7Z164bjATQDaRBLH-SgEbJtT0KHOyI7Ge5W4Ph7gDz8skrlxgr_peVyBLulFTN_51ruhE-RTHHuURXpCAs7Jcz-H8ZSmdXjBtDg3RZLCD29toOkE803RjUejmutAPgIhnkF-DL-bhm-7I'
            width={64}
            height={64}
          />
          <div className='absolute top-16 right-0 bg-background-light dark:bg-black p-2 border border-gray-700 text-xs w-32 shadow-lg rotate-3 hover:rotate-0 transition-transform'>
            dropping movie quotes &apos;wherever whenever&apos;
          </div>
        </div>
        <div
          className='absolute bottom-20 right-10 md:right-32 max-w-[150px] text-right group cursor-pointer reveal-on-scroll'
          style={{ transitionDelay: '600ms' }}
        >
          <span className='text-4xl inline-block group-hover:animate-bounce'>
            🍫
          </span>
          <p className='text-xs font-mono mt-2 bg-background-light dark:bg-black inline-block p-1 group-hover:text-primary transition-colors'>
            Always on the hunt for the perfect chocolate
          </p>
        </div>
      </div>
    </section>
  );
}
