import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const graphik = localFont({
  src: [
    {
      path: './_fonts/Graphik-Regular-Trial.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './_fonts/Graphik-Medium-Trial.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './_fonts/Graphik-Semibold-Trial.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={graphik.className}>{children}</body>
    </html>
  );
}
