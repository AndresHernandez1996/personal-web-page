import type { Metadata } from 'next';
import { Host_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import 'antd/dist/reset.css';
import './globals.css';

const hostSans = Host_Grotesk({
  variable: '--font-host-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Andres Hernandez - Front-End Developer & Data Scientist',
  description: 'A personal web page made with Next.js and TS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={hostSans.variable}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
