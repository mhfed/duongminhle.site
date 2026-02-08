import { db } from './db';
import { settings } from './schema';
import { eq } from 'drizzle-orm';

export type SettingsKey =
  | 'global'
  | 'hero'
  | 'about_transition'
  | 'etcetra'
  | 'about'
  | 'showcase_tool';

export const defaultSettings: Record<SettingsKey, any> = {
  global: {
    siteName: 'Duong Minh Le.',
    navLinks: [
      { label: 'ABOUT', href: '#about', id: 'nav-about' },
      { label: 'PROJECTS', href: '#projects', id: 'nav-projects' },
      { label: 'ETCETRA', href: '#etcetra', id: 'nav-etcetra' },
      { label: 'RESUME', href: '#', id: 'nav-resume' },
    ],
    footer: {
      email: 'duongminhle@gmail.com',
      phone: '+91 9890690762',
      location: ['Gandhinagar, Gujarat', 'Pune, Maharashtra'],
      socials: {
        instagram: '#',
        linkedin: '#',
        behance: '#',
      },
    },
  },
  hero: {
    title: { first: 'Duong', last: 'Minh Le' },
    subtitle: {
      line1: 'Every Detail Tells A',
      line2: 'Story Worth',
      highlight: 'Exploring',
    },
    bio: "I'm a User Experience Designer, artist and storyteller. I believe in solving meaningful problems through elegant, creative solutions. My passion lies in the subtle intersection of art and technology.\n\nCurrently studying Interaction Design, B.Des at UID, Gujarat",
    images: {
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7BfwYkJ3wuAlEYcxseZvzLefQYzqAA4iH0dPyn4BdYhZN24dTL01WOHCrn3FP_L4Xmwg4dfQBHawF8g5CYK2RLRQ6OkfJbEJBr6g2FTQluSJww3W1SwMM-d4CKCRMPXMH2GdxNBW8IXSgKjCK6IPzo-qJIXxIxG3IAHSC81BIbrlwuSTB0kS_7XJBcEg0_mFOyU1ylgQJfWNpqeRXijIl6tD0oFtVehfcAii_J5bIK-vVa18cozT7PJoqnfSj4B4fqIFnQMm3jPLE',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqSao1pwF2Yzq9R9GxW1uatJTUCwn39iZw8PG1Dil7nrBas30T26LKQkJumeOjbJbMEUHlaW4ywsI7c8DBwCm1LOmrccghm1K5brY2bGI_2QO3G_CNCzzfFSaoIOj_UdbOnItuXMN_ybRnWs1upEZHrfxiG1W4C16C9EZtqxJKJmHnEFJ4qlpkD6O9xdIqF7A_aPKFq49RuNRFzoaLJVBb50nCDrd5nZHOgutlGQWmQkjppWjsZeS-P_Ay8b5VfFHE07Fy6uR8H5Sa',
      img3: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDByAZlq0YuAu_NWfEPItpBexhie27_nPbzic9qIc7xEaSVWMqLneVUM0pYQx5pR-1jcHGDZuf8O6fkmdCesDMEIyb6gTdGuYbSUtY9FssIeauSLMxILqXs8AIbCUCEgYUW7HHxjH_lOpnd3bMHa3VJt8YeSyhJ-YoUWQrI_SJSbOKSenY_d698g4pbGwPfYmQqjI7XNJ1AD_LN7KrtuKrcC9T0Q3Eox7UyhdAaG61B8ayuKbYpSFf-qqe-FT1MR8eu4EzLffOfP9iL',
      img4: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrKyl_SXfYwE425QFtax06f_VoRuRZaTMDM0nTEpdClw8w7IVGDm2W1siTNELDh9ApMyDteTEz5w0q5VPtFwnPjvsWX-G0DPmbt3CV-Pi2tEHf8bbC67a8CLzFf4jEHAIyf7Ts66rbH4Cdj7AsGmSnDZuaDGX4DdRbG_KwuFmk614xSB3R9TFSO-kOQ5Hug2ChgMwtbPF0PFoQiRfczbOby3y3ZsqVxXQcuenMKfMgHORYLCah4pIuV50li6kQjJ2B81eZulyrU0i2',
    },
  },
  about_transition: {
    text: "But my work doesn't stop here.",
    buttonText: 'Check out ETCETRA →',
  },
  etcetra: {
    title: {
      line1: 'Not always working',
      subtitle: '(but always curious)',
    },
    floatingItems: {
      item1: 'born with a pencil in hand (always sketching!)',
      item2: 'falling down TED-Ed video rabbit holes',
      item3: {
        line1: 'Questions',
        line2: 'no one knows',
        line3: 'the answer to',
      },
      item4: "dropping movie quotes 'wherever whenever'",
      item5: {
        emoji: '🍫',
        text: 'Always on the hunt for the perfect chocolate',
      },
      images: {
        img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9HcI-HWTdiW5kEdBKlxdEHOXSKn1FgQV4jYBdr6GV3HebKtMO9pUpe6Xh1M0t2ZE31Zf0CGl6qbHxjMKuCJdHnsiWXWwGaZuDDkIJ7Dh-SBtoi8wu4kuDcQE39tZg-naITo4OfuF9s_minrz0nIKm-9NAAQBeifwKAgwwMncxYJ1ZkWDmaFnchjJeR9v7Py1HyhSQ69z8vxY_Y2uN-iANYkuVhQquHNJLZdpX3CVJmHP4eT2hyT71aFJ5W-vf6jOQaBSaYr3qpg1h',
        img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNhOmSPlVO7Jur0utAveRqaRY1DuIxj-GXVIcn4jhf_Hgd6XBkIe_o1VyfZJa2w4Efv5YKqC9GbZAFr9kiVz9n2Jf1cN-zTDJJCIYAbrf6afsOSDNHhtxmvgAINQ8RHGCoyjkglEbHdVpo--cLoTN29TgJjMAx3pvvCvmeMo_QK9ZTFnrL5tfd887wDFEmiLvX265maqbkSVRyanIB1PJ-l_yYihOxVLEDmU85YiAaobH6Yj5EbWT04vT_vx6OquZ5AUEFDDRrYbQ1',
        img3: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6tsEQAITpX4LVtjN8_fxxhqqypIBoX0Ipw28iL-07rfxSfhXEPzURfhN9GQA7eEZeqV1aIh4DBpXnXa3oFXdzNJEPII6OjrvmEeIGcn9DXtBZT6NOIz5Z8xhhkmiP2gj7Z164bjATQDaRBLH-SgEbJtT0KHOyI7Ge5W4Ph7gDz8skrlxgr_peVyBLulFTN_51ruhE-RTHHuURXpCAs7Jcz-H8ZSmdXjBtDg3RZLCD29toOkE803RjUejmutAPgIhnkF-DL-bhm-7I',
      },
    },
  },
  about: {
    intro: {
      name: 'SANJANA BAWEJA',
      subtitle: '/noun/ gentle, peaceful',
      bio: 'An interaction designer who finds creativity in the details and meaning in the experience. Always exploring, always questioning.',
      image: '',
    },
    experience: [
      {
        id: 'background',
        title: 'Background',
        content:
          'Sketched my way through childhood, wireframing my way through adulthood. I studied science in school—who knew reactions and formulas would lead me to design? Currently in my 3rd Year of B.Des in Interaction Design at UID, Gujarat.',
      },
      {
        id: 'philosophy',
        title: 'Design Philosophy',
        content:
          'Designing is just structured overthinking—done effortlessly. To me, design is aligning business strategies with user expectations in a way that feels seamless and intuitive.',
      },
      {
        id: 'things-i-love',
        title: 'Things I love',
        content:
          'From negotiating screen time as a kid to calling every film ‘creative fuel’—I’ve always found reasons to watch. I love listening to people talk about things they love. Water color paintings are my favorite form of therapy.',
      },
    ],
    gallery: ['', '', '', ''],
    quote: {
      line1: 'Good design is ',
      line1_strike: 'invisible',
      line2: 'but great design makes you look ',
      line2_highlight: 'twice',
      signature: 'Sanjana',
    },
  },
  showcase_tool: {
    title: 'The Perfect Stack',
    subtitle:
      'Crafting seamless digital experiences with modern technologies. My toolkit is curated for speed, scalability, and performance.',
    innerCircle: [],
    outerCircle: [],
    extraOuterCircle: [],
    showExtraOuterCircle: false,
  },
};

export async function getSettings(key: SettingsKey) {
  try {
    const result = await db
      .select()
      .from(settings)
      .where(eq(settings.key, key));
    if (result.length > 0) {
      return JSON.parse(result[0].value);
    }
    return defaultSettings[key];
  } catch (error) {
    console.error(`Failed to fetch settings for key ${key}:`, error);
    return defaultSettings[key];
  }
}

export async function updateSettings(key: SettingsKey, value: any) {
  try {
    const jsonValue = JSON.stringify(value);
    await db
      .insert(settings)
      .values({ key, value: jsonValue })
      .onConflictDoUpdate({
        target: settings.key,
        set: { value: jsonValue },
      });
    return { success: true };
  } catch (error) {
    console.error(`Failed to update settings for key ${key}:`, error);
    return { success: false, error };
  }
}
