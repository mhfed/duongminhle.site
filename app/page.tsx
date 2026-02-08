import { db } from '@/app/lib/db';
import { projects, testimonials } from '@/app/lib/schema';
import { getSettings } from '@/app/lib/settings';
import { desc, InferSelectModel } from 'drizzle-orm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Etcetra from './components/sections/Etcetra';
import Testimonials from './components/sections/Testimonials';
import AboutTransition from './components/sections/AboutTransition';
import HomeAnimations from './components/HomeAnimations';
import ShowcaseTool from './components/sections/ShowcaseTool';

export const dynamic = 'force-dynamic'; // Ensure new content is reflected immediately

export default async function Home() {
  let projectsData: InferSelectModel<typeof projects>[] = [];
  let testimonialsData: InferSelectModel<typeof testimonials>[] = [];
  let globalSettings,
    heroSettings,
    aboutTransitionSettings,
    etcetraSettings,
    showcaseToolSettings;

  try {
    projectsData = await db
      .select()
      .from(projects)
      .orderBy(desc(projects.order));
    testimonialsData = await db
      .select()
      .from(testimonials)
      .orderBy(desc(testimonials.order));

    globalSettings = await getSettings('global');
    heroSettings = await getSettings('hero');
    aboutTransitionSettings = await getSettings('about_transition');
    etcetraSettings = await getSettings('etcetra');
    showcaseToolSettings = await getSettings('showcase_tool');
  } catch (error) {
    console.error(
      'Failed to fetch data, falling back to empty or static if desired',
      error,
    );
    projectsData = [];
    testimonialsData = [];
  }

  return (
    <div>
      <HomeAnimations />
      <Navbar settings={globalSettings} />
      <Hero settings={heroSettings} />
      {/* Showcase tool */}
      <ShowcaseTool settings={showcaseToolSettings} />
      <Projects projects={projectsData} />
      <AboutTransition settings={aboutTransitionSettings} />
      <Etcetra settings={etcetraSettings} />
      <Testimonials testimonials={testimonialsData} />
      <Footer settings={globalSettings} />
    </div>
  );
}
