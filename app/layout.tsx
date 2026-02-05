import type { Metadata } from 'next';
import { Inter, Oswald, Sacramento } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
});

const sacramento = Sacramento({
  variable: '--font-sacramento',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sanjana Baweja - Portfolio',
  description: 'User Experience Designer, artist and storyteller.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        />
      </head>
      <body
        className={`${inter.variable} ${oswald.variable} ${sacramento.variable} antialiased bg-background-light dark:bg-background-dark text-gray-900 dark:text-white transition-colors duration-300 font-body`}
      >
        {children}
      </body>
    </html>
  );
}
