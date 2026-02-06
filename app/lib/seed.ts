import { db } from './db';
import { projects, testimonials } from './schema';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function seed() {
  console.log('Seeding database...');

  // Projects Data
  const projectsData = [
    {
      title: 'Artceps',
      role: 'UX Research; Interface Design',
      duration: '3 months',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAlmBnqxDIGkyaRz5CIIlAXGjnekmVgmaLmLXInLYWMiAYL3uldmjk9TOAxh9DnFF9eQvJhCOYF8R3BYFp8i_O4MJ7WbmvpF9_jxGmkM8FqeP3bIZvQG52A5Ldu33nNFHgqN_batKo0mJ8bgoqIfwAC5bWD8GOv_BPPan7bExe0_tSn_HR08SSeiTPJpRzHniHFHtmkgu0qnQMccxTvlTcNrreZAPxSPRtPoflY3eEGc-YUdqJoJQhoRESjZ4PTkTocz0x3uYW2CoNc',
      alt: 'Mobile App Mockup',
      roleColor: 'text-gray-500',
      order: 1,
    },
    {
      title: 'Sahayak',
      role: 'Service Design',
      duration: '2 months',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBIGqsINpCsqNyBlBEKSgsJR_HvTgVqrUg0iWD2pkEw2lnG5b9chFl1P9OfiK7gkU_14U8_gvj0YBZnP65qz5pT1AJw5iZXTBUEmojQlTZhPatF4M5vXJJeUf2jcNfUT7mjzXlrPSiSdGdnn2hDSxOhhcRRFtycjuSkUkVGCLLP61adr8nlfkCX-KsnYyuDrItHXEa3Cl-PzDJpprooJnDDpxOEt4lpV69wALdbaCbTv7b2oOR7Qblzqax0fCDDx3KDPS5f-pYNgGfl',
      alt: 'Sahayak App Mockup',
      roleColor: 'text-gray-500',
      order: 2,
    },
    {
      title: 'STEMpedia',
      role: 'INTERNSHIP',
      duration: '5 months',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDWp9Rdpeglq-S9p5NgLPUhhNHzI7q4NNbCEN26tDh8fDiBiNtQUQBTsji3R0KcNK4B2tvwHoiEQbbVj6ODg7OftLe-1EQxi8R63_19S4y6Mday63ASXCouB0ARJalaGFj0GxxnT2QF-8Jpa5xG1NYaliWhfOF3vN6g6ijqpBuFpGr59YFaupjTZNlT24U92vzy1hlGf_9AZYyaPnHhhFF7UAZujH6gOFdawORjADEnhVBEQAp78dP1ODfdrJKKNS6qcYIltX2YmrGh',
      alt: 'Dashboard Mockup',
      roleColor: 'text-primary',
      order: 3,
    },
    {
      title: 'Benjamins Money',
      role: 'INTERNSHIP',
      duration: '5 months',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDiAlpHrOkl164OqIK1OZ8t94TR_wIAiv6t5C93fnGGXISapldBsiBCaxQt67cEN0PuAx3cgbevz3oKptQE43IKBd-WjFoaDMIFMqw2s0FY4Lu3Ce3SbL8qVH_NhCGwoxv35rzu0eL8U8A4RTIjLtIvCYjGymOEo4wTBwWbzUo97_U1gRrXks66mp28IqQYoYTuiTb3Indz-79ms7kVMgmsC_94X8ybDUaj1D5fq2k3ctNrj6gPdhPK96rRCBTVPX9RNk_FNpt_fChG',
      alt: 'Fintech Web Mockup',
      roleColor: 'text-gray-500',
      order: 4,
    },
  ];

  // Testimonials Data
  const testimonialsData = [
    {
      content:
        'Duong has a been an exemplary person in shaping our UX Design curriculum at Tutedude, which embarks his skills and deep knowledge in the UX domain. His decisive approach and ability to commit towards task completion was commendable.',
      authorName: 'Mohit Naroune',
      authorRole: 'Product Designer @Tutedude',
      authorImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDS0ij420hVgxTaaWXDpOTwcGE7IOf9LYqhXYmaSs7X66NVd5I-0DqNrP4OT1u8hbm7VquChSPZ74PhHbQkMkVAWHld26rPQWQ8S3O50x67B-dy7tZPwMdsA1i2GxuTEsibebw2BoWaxo1rsxP30U8QJfUeae-rJAGjD6D4X6DOzD9uwX2h87EkzeZ__xXgImtxbJZv5jgF0BjpRt7PEKALm8t0kZ2WT7UxdUM2ZXHjvpiuuppUokq-Wjh6yOj2x6jBLt-7hyVJeTwa',
      order: 1,
    },
    {
      content:
        'Working with Duong was an absolute pleasure. His attention to detail and creative solutions elevated our project to a new level. He consistently delivered high-quality work and was always open to feedback.',
      authorName: 'Sarah Johnson',
      authorRole: 'CTO @ TechFlow',
      authorImage:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
      order: 2,
    },
    {
      content:
        "I was impressed by Duong's ability to translate complex requirements into intuitive user interfaces. His technical skills are matched only by his professional work ethic. A true asset to any team.",
      authorName: 'David Chen',
      authorRole: 'Senior Developer @ Construct',
      authorImage:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
      order: 3,
    },
  ];

  try {
    // Insert Projects
    for (const project of projectsData) {
      await db.insert(projects).values(project);
    }

    // Insert Testimonials
    for (const testimonial of testimonialsData) {
      await db.insert(testimonials).values(testimonial);
    }

    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    process.exit(0);
  }
}

seed();
