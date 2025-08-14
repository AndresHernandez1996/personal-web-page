import type { Metadata } from 'next';
import { Host_Grotesk } from 'next/font/google';
import 'antd/dist/reset.css';
import './globals.css';

const hostSans = Host_Grotesk({
  variable: '--font-host-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Personal web page - Andres Hernandez',
  description: 'A personal web page made with Next.js and TS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={hostSans.variable}>{children}</body>
    </html>
  );
}
